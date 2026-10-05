'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import QRCode from 'qrcode'
import * as gtag from '@/lib/gtag'

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
}

export type ThemeType = 'charcoal' | 'slate' | 'emerald' | 'monochrome'
export type DocumentType = 'INVOICE' | 'TAX INVOICE' | 'RECEIPT' | 'PROFORMA INVOICE' | 'QUOTE'

export interface InvoiceData {
  docType: DocumentType
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  currency: string
  
  // Sender (From)
  fromName: string
  fromEmail: string
  fromPhone: string
  fromAddress: string
  fromTaxId: string // GSTIN, VAT ID, EIN, etc.
  logoUrl: string

  // Client (Bill To)
  toName: string
  toEmail: string
  toAddress: string
  toTaxId: string

  // Items
  items: InvoiceItem[]

  // Adjustments
  taxRate: number // e.g. 18 for 18% GST or 20 for 20% VAT
  taxLabel: string // "VAT", "GST", "Sales Tax"
  discountRate: number // percent or fixed
  discountType: 'percent' | 'fixed'
  shippingFee: number
  amountPaid: number

  // Payment Details
  includePaymentQr: boolean
  paymentMethod: 'upi' | 'paypal' | 'link' | 'bank'
  paymentUpiId: string
  paymentPayeeName: string
  paymentLinkUrl: string
  bankDetails: string

  // Notes & Terms
  notes: string
  terms: string

  // Settings
  theme: ThemeType
  showAttribution: boolean
}

const DEFAULT_CURRENCIES = [
  { code: 'USD', symbol: '$', label: 'USD ($) — US Dollar' },
  { code: 'EUR', symbol: '€', label: 'EUR (€) — Euro' },
  { code: 'GBP', symbol: '£', label: 'GBP (£) — British Pound' },
  { code: 'INR', symbol: '₹', label: 'INR (₹) — Indian Rupee' },
  { code: 'CAD', symbol: 'CA$', label: 'CAD ($) — Canadian Dollar' },
  { code: 'AUD', symbol: 'AU$', label: 'AUD ($) — Australian Dollar' },
  { code: 'SGD', symbol: 'S$', label: 'SGD (S$) — Singapore Dollar' },
  { code: 'AED', symbol: 'AED', label: 'AED — UAE Dirham' },
  { code: 'JPY', symbol: '¥', label: 'JPY (¥) — Japanese Yen' },
]

const SAMPLE_INVOICE: InvoiceData = {
  docType: 'INVOICE',
  invoiceNumber: 'INV-2026-0042',
  invoiceDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  currency: '$',

  fromName: 'Apex Studio & Design Lab',
  fromEmail: 'billing@apexstudio.io',
  fromPhone: '+1 (555) 382-9014',
  fromAddress: '742 Evergreen Terrace, Suite 300\nSan Francisco, CA 94107',
  fromTaxId: 'US-EIN 94-8273619',
  logoUrl: '',

  toName: 'Acme Digital Ventures Inc.',
  toEmail: 'accounts@acmeventures.com',
  toAddress: '100 Innovation Parkway, Floor 12\nAustin, TX 78701',
  toTaxId: 'TX-VAT 8829103',

  items: [
    { id: '1', description: 'Product Design & UI System Architecture (Sprints 1–3)', quantity: 1, unitPrice: 3200 },
    { id: '2', description: 'Full-stack Next.js Performance & Core Web Vitals Optimization', quantity: 24, unitPrice: 85 },
    { id: '3', description: 'Real-time Analytics & Conversion Tracking Setup', quantity: 1, unitPrice: 750 },
  ],

  taxRate: 8.5,
  taxLabel: 'Sales Tax (8.5%)',
  discountRate: 0,
  discountType: 'percent',
  shippingFee: 0,
  amountPaid: 0,

  includePaymentQr: true,
  paymentMethod: 'link',
  paymentUpiId: '',
  paymentPayeeName: 'Apex Studio',
  paymentLinkUrl: 'https://stripe.com',
  bankDetails: 'Bank: Silicon Valley Bank / Wire Account: 9876543210 / Routing: 121000358',

  notes: 'Thank you for your business! Please remit payment within 14 days of invoice receipt.',
  terms: 'Late payments subject to a 1.5% monthly compounding fee after 30 days overdue.',

  theme: 'charcoal',
  showAttribution: true,
}

const STORAGE_KEY = 'meshalive_invoice_draft_v1'
const SENDER_PROFILE_KEY = 'meshalive_invoice_sender_profile'

export default function InvoiceGeneratorTool() {
  const [data, setData] = useState<InvoiceData>(SAMPLE_INVOICE)
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor')
  const [copiedLink, setCopiedLink] = useState(false)
  const [saveStatus, setSaveStatus] = useState<string | null>(null)
  const printRef = useRef<HTMLDivElement>(null)

  // Load saved draft or profile from localStorage
  useEffect(() => {
    try {
      // Check if invoice hash exists in URL
      if (typeof window !== 'undefined' && window.location.hash.startsWith('#data=')) {
        const rawJson = decodeURIComponent(atob(window.location.hash.replace('#data=', '')))
        const parsed = JSON.parse(rawJson)
        if (parsed && parsed.invoiceNumber) {
          setData(parsed)
          return
        }
      }

      // Check saved draft
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setData(prev => ({ ...prev, ...parsed }))
      }
    } catch (e) {
      console.warn('Failed to parse saved invoice data:', e)
    }
  }, [])

  // Auto-save draft to localStorage debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } catch (err) {
        console.warn('LocalStorage save failed:', err)
      }
    }, 600)
    return () => clearTimeout(timer)
  }, [data])

  // Generate Payment QR code whenever payment method or details change
  useEffect(() => {
    if (!data.includePaymentQr) {
      setQrCodeUrl('')
      return
    }

    let payload = ''
    if (data.paymentMethod === 'upi' && data.paymentUpiId.trim()) {
      // NPCI UPI specification
      const totalAmount = calculateTotals().totalDue
      let uri = `upi://pay?pa=${encodeURIComponent(data.paymentUpiId.trim())}`
      if (data.paymentPayeeName.trim()) {
        uri += `&pn=${encodeURIComponent(data.paymentPayeeName.trim())}`
      }
      if (totalAmount > 0) {
        uri += `&am=${encodeURIComponent(totalAmount.toFixed(2))}&cu=INR`
      }
      uri += `&tn=${encodeURIComponent(`Invoice ${data.invoiceNumber}`)}`
      payload = uri
    } else if (data.paymentMethod === 'paypal' && data.paymentLinkUrl.trim()) {
      let url = data.paymentLinkUrl.trim()
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`
      }
      payload = url
    } else if (data.paymentMethod === 'link' && data.paymentLinkUrl.trim()) {
      let url = data.paymentLinkUrl.trim()
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = `https://${url}`
      }
      payload = url
    } else if (data.paymentMethod === 'bank' && data.bankDetails.trim()) {
      payload = data.bankDetails.trim()
    }

    if (payload) {
      QRCode.toDataURL(payload, {
        width: 380,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
      })
        .then(url => setQrCodeUrl(url))
        .catch(err => {
          console.warn('QR code generation failed:', err)
          setQrCodeUrl('')
        })
    } else {
      setQrCodeUrl('')
    }
  }, [
    data.includePaymentQr,
    data.paymentMethod,
    data.paymentUpiId,
    data.paymentPayeeName,
    data.paymentLinkUrl,
    data.bankDetails,
    data.invoiceNumber,
  ])

  // Calculations
  const calculateTotals = useCallback(() => {
    const subtotal = data.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0)
    
    let discount = 0
    if (data.discountType === 'percent') {
      discount = (subtotal * (data.discountRate || 0)) / 100
    } else {
      discount = data.discountRate || 0
    }

    const taxableAmount = Math.max(0, subtotal - discount)
    const tax = (taxableAmount * (data.taxRate || 0)) / 100
    const shipping = data.shippingFee || 0
    const total = taxableAmount + tax + shipping
    const balanceDue = Math.max(0, total - (data.amountPaid || 0))

    return {
      subtotal,
      discount,
      taxableAmount,
      tax,
      shipping,
      total,
      totalDue: balanceDue,
    }
  }, [data.items, data.discountType, data.discountRate, data.taxRate, data.shippingFee, data.amountPaid])

  const totals = calculateTotals()

  // Line item handlers
  const handleAddItem = () => {
    setData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        { id: Math.random().toString(36).substring(2, 9), description: '', quantity: 1, unitPrice: 0 },
      ],
    }))
  }

  const handleUpdateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setData(prev => ({
      ...prev,
      items: prev.items.map(item => (item.id === id ? { ...item, [field]: value } : item)),
    }))
  }

  const handleRemoveItem = (id: string) => {
    if (data.items.length <= 1) return
    setData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id),
    }))
  }

  // Logo upload handler
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Limit to 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert('Logo file must be less than 2MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = ev => {
      const base64 = ev.target?.result as string
      setData(prev => ({ ...prev, logoUrl: base64 }))
    }
    reader.readAsDataURL(file)
  }

  // Save / Load Sender Profile
  const handleSaveProfile = () => {
    try {
      const profile = {
        fromName: data.fromName,
        fromEmail: data.fromEmail,
        fromPhone: data.fromPhone,
        fromAddress: data.fromAddress,
        fromTaxId: data.fromTaxId,
        logoUrl: data.logoUrl,
        currency: data.currency,
        taxRate: data.taxRate,
        taxLabel: data.taxLabel,
        bankDetails: data.bankDetails,
        paymentUpiId: data.paymentUpiId,
        paymentPayeeName: data.paymentPayeeName,
        paymentLinkUrl: data.paymentLinkUrl,
        theme: data.theme,
      }
      localStorage.setItem(SENDER_PROFILE_KEY, JSON.stringify(profile))
      setSaveStatus('Business profile saved for future invoices!')
      setTimeout(() => setSaveStatus(null), 3500)
    } catch (e) {
      console.warn('Failed to save profile:', e)
    }
  }

  const handleLoadProfile = () => {
    try {
      const saved = localStorage.getItem(SENDER_PROFILE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setData(prev => ({ ...prev, ...parsed }))
        setSaveStatus('Loaded your saved business profile!')
        setTimeout(() => setSaveStatus(null), 3000)
      } else {
        alert('No saved business profile found. Fill out your details and click "Save Business Profile".')
      }
    } catch (e) {
      console.warn('Failed to load profile:', e)
    }
  }

  // Share via URL hash
  const handleShareLink = () => {
    try {
      const json = JSON.stringify(data)
      const base64 = btoa(encodeURIComponent(json))
      const shareUrl = `${window.location.origin}${window.location.pathname}#data=${base64}`
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true)
        gtag.event('share_invoice_link', { currency: data.currency, doc_type: data.docType })
        setTimeout(() => setCopiedLink(false), 2500)
      })
    } catch (e) {
      console.error('Failed to copy share link:', e)
    }
  }

  // Print PDF Trigger
  const handlePrint = () => {
    gtag.event('print_invoice_pdf', {
      currency: data.currency,
      items_count: data.items.length,
      has_qr: data.includePaymentQr,
      theme: data.theme,
    })
    window.print()
  }

  // Reset to sample or empty
  const handleResetSample = () => {
    if (confirm('Reset invoice to sample data? Unsaved changes will be replaced.')) {
      setData(SAMPLE_INVOICE)
    }
  }

  const handleClear = () => {
    if (confirm('Clear all invoice fields to start a blank invoice?')) {
      setData({
        ...SAMPLE_INVOICE,
        invoiceNumber: `INV-${Date.now().toString().slice(-4)}`,
        toName: '',
        toEmail: '',
        toAddress: '',
        toTaxId: '',
        items: [{ id: '1', description: '', quantity: 1, unitPrice: 0 }],
        discountRate: 0,
        amountPaid: 0,
        notes: '',
      })
    }
  }

  // Format currency helper
  const fmt = (amount: number) => {
    return `${data.currency} ${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  // Theme styling configurations
  const themeStyles = {
    charcoal: {
      accentBg: '#18181b',
      accentText: '#ffffff',
      headerBg: '#27272a',
      badgeBg: '#f4f4f5',
      badgeText: '#18181b',
      borderColor: '#e4e4e7',
    },
    slate: {
      accentBg: '#0f172a',
      accentText: '#ffffff',
      headerBg: '#1e293b',
      badgeBg: '#f1f5f9',
      badgeText: '#0f172a',
      borderColor: '#cbd5e1',
    },
    emerald: {
      accentBg: '#064e3b',
      accentText: '#ffffff',
      headerBg: '#047857',
      badgeBg: '#ecfdf5',
      badgeText: '#065f46',
      borderColor: '#a7f3d0',
    },
    monochrome: {
      accentBg: '#000000',
      accentText: '#ffffff',
      headerBg: '#111111',
      badgeBg: '#ffffff',
      badgeText: '#000000',
      borderColor: '#000000',
    },
  }[data.theme]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans">
      {/* Print-specific style tag to force clean vector A4 page rendering */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          nav, header, footer, .no-print, .ad-banner, #adsense-deferred {
            display: none !important;
          }
          .print-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          #invoice-sheet {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 24mm 20mm !important;
            box-shadow: none !important;
            border: none !important;
            page-break-inside: avoid;
            background: #ffffff !important;
          }
          @page {
            size: A4 portrait;
            margin: 0;
          }
        }
      `}} />

      {/* Main Action Top Bar (Hidden on print) */}
      <div className="no-print bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Download / Print PDF</span>
          </button>

          <button
            onClick={handleShareLink}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-all cursor-pointer"
            title="Creates a direct link with all invoice fields pre-filled"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>{copiedLink ? '✓ Copied Share URL!' : 'Share Live Link'}</span>
          </button>

          <button
            onClick={handleSaveProfile}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-all cursor-pointer"
            title="Saves your business info & logo to your local browser storage"
          >
            <span>💾 Save Business Profile</span>
          </button>

          <button
            onClick={handleLoadProfile}
            className="px-3.5 py-2.5 rounded-xl font-medium text-xs bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 border border-neutral-700/60 transition-all cursor-pointer"
          >
            Load Saved Profile
          </button>
        </div>

        <div className="flex items-center gap-3">
          {saveStatus && (
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg animate-fade-in">
              {saveStatus}
            </span>
          )}

          <div className="flex items-center gap-1.5 bg-neutral-800/80 p-1 rounded-xl border border-neutral-700/80">
            <button
              onClick={handleResetSample}
              className="px-2.5 py-1 text-xs text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
            >
              Sample Data
            </button>
            <span className="text-neutral-600">|</span>
            <button
              onClick={handleClear}
              className="px-2.5 py-1 text-xs text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Tab Switcher (Only visible on small screens) */}
      <div className="no-print lg:hidden flex rounded-xl bg-neutral-900 border border-neutral-800 p-1 mb-6">
        <button
          onClick={() => setActiveTab('editor')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'editor' ? 'bg-blue-600 text-white shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          ✏️ Edit Details
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'preview' ? 'bg-blue-600 text-white shadow' : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          📄 Live Preview ({data.currency} {totals.totalDue.toFixed(2)})
        </button>
      </div>

      {/* Grid: Editor Panel (Left) & Sheet Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Controls & Form Inputs */}
        <div className={`no-print lg:col-span-5 space-y-6 ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}>
          
          {/* Document Setup Card */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider flex items-center justify-between">
              <span>Document Setup</span>
              <span className="text-xs font-normal text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-2 py-0.5 rounded">
                100% Client-Side Privacy
              </span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Doc Type</label>
                <select
                  value={data.docType}
                  onChange={e => setData(prev => ({ ...prev, docType: e.target.value as DocumentType }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="INVOICE">INVOICE</option>
                  <option value="TAX INVOICE">TAX INVOICE</option>
                  <option value="RECEIPT">RECEIPT</option>
                  <option value="PROFORMA INVOICE">PROFORMA INVOICE</option>
                  <option value="QUOTE">QUOTE / ESTIMATE</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Invoice #</label>
                <input
                  type="text"
                  value={data.invoiceNumber}
                  onChange={e => setData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                  placeholder="INV-001"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Issue Date</label>
                <input
                  type="date"
                  value={data.invoiceDate}
                  onChange={e => setData(prev => ({ ...prev, invoiceDate: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Due Date</label>
                <input
                  type="date"
                  value={data.dueDate}
                  onChange={e => setData(prev => ({ ...prev, dueDate: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Currency</label>
                <select
                  value={data.currency}
                  onChange={e => setData(prev => ({ ...prev, currency: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                >
                  {DEFAULT_CURRENCIES.map(c => (
                    <option key={c.code} value={c.symbol}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Visual Theme</label>
                <select
                  value={data.theme}
                  onChange={e => setData(prev => ({ ...prev, theme: e.target.value as ThemeType }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="charcoal">Charcoal Minimal (Meshalive)</option>
                  <option value="slate">Executive Slate</option>
                  <option value="emerald">Emerald Pro</option>
                  <option value="monochrome">Pure Monochrome (Laser B&W)</option>
                </select>
              </div>
            </div>

            {/* Custom Logo Upload */}
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">Company Logo (Optional)</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/svg+xml, image/webp"
                  onChange={handleLogoUpload}
                  className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-neutral-800 file:text-neutral-200 hover:file:bg-neutral-700 cursor-pointer"
                />
                {data.logoUrl && (
                  <button
                    onClick={() => setData(prev => ({ ...prev, logoUrl: '' }))}
                    className="text-xs text-rose-400 hover:text-rose-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Business & Client Cards */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              From (Your Business)
            </h3>
            <div className="space-y-2.5">
              <input
                type="text"
                placeholder="Business or Freelancer Name"
                value={data.fromName}
                onChange={e => setData(prev => ({ ...prev, fromName: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={data.fromEmail}
                  onChange={e => setData(prev => ({ ...prev, fromEmail: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={data.fromPhone}
                  onChange={e => setData(prev => ({ ...prev, fromPhone: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <textarea
                placeholder="Company Address (Street, City, Country, ZIP)"
                rows={2}
                value={data.fromAddress}
                onChange={e => setData(prev => ({ ...prev, fromAddress: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
              />
              <input
                type="text"
                placeholder="Tax ID / GSTIN / VAT / EIN (Optional)"
                value={data.fromTaxId}
                onChange={e => setData(prev => ({ ...prev, fromTaxId: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Bill To (Client)
            </h3>
            <div className="space-y-2.5">
              <input
                type="text"
                placeholder="Client / Company Name"
                value={data.toName}
                onChange={e => setData(prev => ({ ...prev, toName: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Client Email"
                value={data.toEmail}
                onChange={e => setData(prev => ({ ...prev, toEmail: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Client Address"
                rows={2}
                value={data.toAddress}
                onChange={e => setData(prev => ({ ...prev, toAddress: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
              />
              <input
                type="text"
                placeholder="Client Tax ID / VAT / GSTIN (Optional)"
                value={data.toTaxId}
                onChange={e => setData(prev => ({ ...prev, toTaxId: e.target.value }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Line Items Editor */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                Line Items ({data.items.length})
              </h3>
              <button
                onClick={handleAddItem}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
              >
                + Add Item
              </button>
            </div>

            <div className="space-y-3">
              {data.items.map((item, idx) => (
                <div key={item.id} className="p-3 bg-neutral-950/70 border border-neutral-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-neutral-500 font-mono">#{idx + 1}</span>
                    <input
                      type="text"
                      placeholder="Item or service description"
                      value={item.description}
                      onChange={e => handleUpdateItem(item.id, 'description', e.target.value)}
                      className="flex-1 bg-transparent border-b border-neutral-800 px-1 py-0.5 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                    />
                    {data.items.length > 1 && (
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-neutral-500 hover:text-rose-400 p-1 cursor-pointer"
                        title="Remove row"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div>
                      <label className="text-[11px] text-neutral-500">Qty / Hrs</label>
                      <input
                        type="number"
                        min="0"
                        step="any"
                        value={item.quantity}
                        onChange={e => handleUpdateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-500">Rate ({data.currency})</label>
                      <input
                        type="number"
                        min="0"
                        step="any"
                        value={item.unitPrice}
                        onChange={e => handleUpdateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="text-right">
                      <label className="text-[11px] text-neutral-500">Line Total</label>
                      <div className="text-sm font-semibold text-neutral-200 pt-1">
                        {data.currency} {(item.quantity * item.unitPrice).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tax, Discounts & Financial Adjustments */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Taxes & Adjustments
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Tax Label</label>
                <input
                  type="text"
                  placeholder="VAT, GST, Sales Tax"
                  value={data.taxLabel}
                  onChange={e => setData(prev => ({ ...prev, taxLabel: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Tax Rate (%)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={data.taxRate}
                  onChange={e => setData(prev => ({ ...prev, taxRate: parseFloat(e.target.value) || 0 }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Discount</label>
                <div className="flex gap-1.5">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={data.discountRate}
                    onChange={e => setData(prev => ({ ...prev, discountRate: parseFloat(e.target.value) || 0 }))}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                  />
                  <select
                    value={data.discountType}
                    onChange={e => setData(prev => ({ ...prev, discountType: e.target.value as 'percent' | 'fixed' }))}
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-2 py-2 text-xs text-neutral-300 focus:outline-none"
                  >
                    <option value="percent">%</option>
                    <option value="fixed">{data.currency}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Shipping / Fees ({data.currency})</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={data.shippingFee}
                  onChange={e => setData(prev => ({ ...prev, shippingFee: parseFloat(e.target.value) || 0 }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">Amount Already Paid ({data.currency})</label>
              <input
                type="number"
                min="0"
                step="any"
                value={data.amountPaid}
                onChange={e => setData(prev => ({ ...prev, amountPaid: parseFloat(e.target.value) || 0 }))}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Payment QR Code & Wire Details (Meshalive Signature Feature) */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                <span>Payment QR Code</span>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-950/70 border border-amber-800/40 px-1.5 py-0.5 rounded">
                  Scan-to-Pay
                </span>
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.includePaymentQr}
                  onChange={e => setData(prev => ({ ...prev, includePaymentQr: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {data.includePaymentQr && (
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">Payment Type</label>
                  <select
                    value={data.paymentMethod}
                    onChange={e => setData(prev => ({ ...prev, paymentMethod: e.target.value as any }))}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="link">Custom URL / Stripe / Razorpay / Revolut</option>
                    <option value="upi">UPI ID (Google Pay, PhonePe, Paytm, BHIM — India)</option>
                    <option value="paypal">PayPal.me Link</option>
                    <option value="bank">Direct Bank Wire / IBAN</option>
                  </select>
                </div>

                {data.paymentMethod === 'upi' && (
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="UPI ID (e.g. name@okhdfcbank or 9876543210@paytm)"
                      value={data.paymentUpiId}
                      onChange={e => setData(prev => ({ ...prev, paymentUpiId: e.target.value }))}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Payee Name (Optional)"
                      value={data.paymentPayeeName}
                      onChange={e => setData(prev => ({ ...prev, paymentPayeeName: e.target.value }))}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                    />
                    <p className="text-[11px] text-neutral-500">
                      Auto-encodes exact invoice balance ({fmt(totals.totalDue)}) into the UPI QR code.
                    </p>
                  </div>
                )}

                {(data.paymentMethod === 'link' || data.paymentMethod === 'paypal') && (
                  <div>
                    <input
                      type="text"
                      placeholder={data.paymentMethod === 'paypal' ? 'paypal.me/yourusername' : 'https://buy.stripe.com/... or payment link'}
                      value={data.paymentLinkUrl}
                      onChange={e => setData(prev => ({ ...prev, paymentLinkUrl: e.target.value }))}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">
                    Bank Wire / Payment Instructions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Bank Name: Chase / IBAN: GB29... / Swift: CHASUS33"
                    value={data.bankDetails}
                    onChange={e => setData(prev => ({ ...prev, bankDetails: e.target.value }))}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Notes & Terms */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-lg space-y-4">
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Notes & Terms
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Customer Note</label>
                <textarea
                  rows={2}
                  value={data.notes}
                  onChange={e => setData(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Payment Terms</label>
                <textarea
                  rows={2}
                  value={data.terms}
                  onChange={e => setData(prev => ({ ...prev, terms: e.target.value }))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-neutral-400">Include "Created with Meshalive"</span>
                <input
                  type="checkbox"
                  checked={data.showAttribution}
                  onChange={e => setData(prev => ({ ...prev, showAttribution: e.target.checked }))}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-neutral-950 border-neutral-800"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Pixel-Perfect Printable Invoice Sheet (Preview) */}
        <div className={`lg:col-span-7 print-container ${activeTab === 'editor' ? 'hidden lg:block' : 'block'}`}>
          
          <div
            id="invoice-sheet"
            ref={printRef}
            className="w-full bg-white text-neutral-900 rounded-2xl p-8 sm:p-12 shadow-2xl border border-neutral-200 transition-all font-sans"
            style={{ minHeight: '1050px' }}
          >
            {/* Header: Company & Doc Title */}
            <div className="flex flex-wrap justify-between items-start gap-6 pb-8 border-b border-neutral-200">
              <div className="max-w-[60%]">
                {data.logoUrl ? (
                  <img
                    src={data.logoUrl}
                    alt="Company Logo"
                    className="max-h-16 max-w-[200px] object-contain mb-3"
                  />
                ) : null}
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                  {data.fromName || 'Your Business Name'}
                </h1>
                <div className="text-xs sm:text-sm text-neutral-600 mt-2 space-y-0.5 whitespace-pre-line leading-relaxed">
                  {data.fromAddress && <p>{data.fromAddress}</p>}
                  {data.fromEmail && <p>{data.fromEmail}</p>}
                  {data.fromPhone && <p>{data.fromPhone}</p>}
                  {data.fromTaxId && (
                    <p className="font-semibold text-neutral-700">Tax ID: {data.fromTaxId}</p>
                  )}
                </div>
              </div>

              <div className="text-right">
                <div
                  className="inline-block px-3 py-1 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase mb-3"
                  style={{
                    backgroundColor: themeStyles.accentBg,
                    color: themeStyles.accentText,
                  }}
                >
                  {data.docType}
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between sm:justify-end gap-3">
                    <span className="text-neutral-500 font-medium">Invoice No:</span>
                    <span className="font-bold font-mono text-neutral-900">{data.invoiceNumber || '—'}</span>
                  </div>
                  <div className="flex justify-between sm:justify-end gap-3">
                    <span className="text-neutral-500 font-medium">Date:</span>
                    <span className="font-semibold text-neutral-800">{data.invoiceDate || '—'}</span>
                  </div>
                  <div className="flex justify-between sm:justify-end gap-3">
                    <span className="text-neutral-500 font-medium">Due Date:</span>
                    <span className="font-semibold text-neutral-800">{data.dueDate || '—'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bill To Section */}
            <div className="py-6 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Billed To
              </span>
              <div className="text-base font-bold text-neutral-900">
                {data.toName || 'Client Name / Enterprise Corp.'}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 mt-1 space-y-0.5 whitespace-pre-line leading-relaxed">
                {data.toAddress && <p>{data.toAddress}</p>}
                {data.toEmail && <p>{data.toEmail}</p>}
                {data.toTaxId && (
                  <p className="font-semibold text-neutral-700">Tax ID: {data.toTaxId}</p>
                )}
              </div>
            </div>

            {/* Items Table */}
            <div className="py-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr
                    className="border-b-2 text-xs font-bold uppercase tracking-wider text-neutral-500"
                    style={{ borderColor: themeStyles.accentBg }}
                  >
                    <th className="py-2.5 px-2">Description</th>
                    <th className="py-2.5 px-2 text-center w-20">Qty</th>
                    <th className="py-2.5 px-2 text-right w-28">Rate</th>
                    <th className="py-2.5 px-2 text-right w-28">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  {data.items.map(item => (
                    <tr key={item.id} className="text-neutral-800">
                      <td className="py-3.5 px-2 font-medium">
                        {item.description || <span className="text-neutral-300 italic">No description</span>}
                      </td>
                      <td className="py-3.5 px-2 text-center text-neutral-600">{item.quantity}</td>
                      <td className="py-3.5 px-2 text-right text-neutral-600">{fmt(item.unitPrice)}</td>
                      <td className="py-3.5 px-2 text-right font-semibold text-neutral-900">
                        {fmt(item.quantity * item.unitPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals & Payment QR Breakdown */}
            <div className="py-6 border-t border-neutral-200 flex flex-wrap justify-between items-start gap-8">
              {/* Payment Details & QR Code (Left) */}
              <div className="flex-1 min-w-[240px] max-w-sm space-y-4">
                {data.includePaymentQr && qrCodeUrl ? (
                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70 flex items-center gap-4">
                    <img
                      src={qrCodeUrl}
                      alt="Payment QR Code"
                      className="w-24 h-24 rounded-lg bg-white border border-neutral-200 p-1 shrink-0"
                    />
                    <div className="text-xs space-y-1">
                      <div className="font-bold text-neutral-900 flex items-center gap-1">
                        <span>Scan & Pay Instant</span>
                      </div>
                      <p className="text-neutral-500">
                        Scan with your banking app or camera to pay immediately.
                      </p>
                      {data.paymentMethod === 'upi' && data.paymentUpiId && (
                        <p className="font-mono text-[11px] text-neutral-700 truncate font-semibold">
                          UPI: {data.paymentUpiId}
                        </p>
                      )}
                    </div>
                  </div>
                ) : null}

                {data.bankDetails && (
                  <div className="text-xs text-neutral-600 space-y-1">
                    <span className="font-bold uppercase tracking-wider text-neutral-400 block">
                      Wire & Banking Instructions
                    </span>
                    <p className="whitespace-pre-line font-mono text-[11px] bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                      {data.bankDetails}
                    </p>
                  </div>
                )}
              </div>

              {/* Summary Figures (Right) */}
              <div className="w-full sm:w-64 space-y-2 text-sm">
                <div className="flex justify-between py-1 text-neutral-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-neutral-800">{fmt(totals.subtotal)}</span>
                </div>

                {totals.discount > 0 && (
                  <div className="flex justify-between py-1 text-emerald-700">
                    <span>Discount ({data.discountType === 'percent' ? `${data.discountRate}%` : 'Fixed'}):</span>
                    <span className="font-semibold">-{fmt(totals.discount)}</span>
                  </div>
                )}

                {data.taxRate > 0 && (
                  <div className="flex justify-between py-1 text-neutral-600">
                    <span>{data.taxLabel || 'Tax'}:</span>
                    <span className="font-semibold text-neutral-800">+{fmt(totals.tax)}</span>
                  </div>
                )}

                {totals.shipping > 0 && (
                  <div className="flex justify-between py-1 text-neutral-600">
                    <span>Shipping / Handling:</span>
                    <span className="font-semibold text-neutral-800">+{fmt(totals.shipping)}</span>
                  </div>
                )}

                <div className="flex justify-between py-2 border-t border-neutral-200 text-base font-bold text-neutral-900">
                  <span>Total:</span>
                  <span>{fmt(totals.total)}</span>
                </div>

                {data.amountPaid > 0 && (
                  <div className="flex justify-between py-1 text-neutral-500 text-xs">
                    <span>Amount Paid:</span>
                    <span className="font-semibold">-{fmt(data.amountPaid)}</span>
                  </div>
                )}

                <div
                  className="flex justify-between items-center p-3 rounded-xl mt-2 font-bold"
                  style={{
                    backgroundColor: themeStyles.badgeBg,
                    color: themeStyles.badgeText,
                    border: `1px solid ${themeStyles.borderColor}`,
                  }}
                >
                  <span className="text-sm uppercase tracking-wider">Balance Due:</span>
                  <span className="text-lg font-mono">{fmt(totals.totalDue)}</span>
                </div>
              </div>
            </div>

            {/* Notes & Terms Footer */}
            {(data.notes || data.terms) && (
              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 space-y-3">
                {data.notes && (
                  <div>
                    <span className="font-bold text-neutral-700 uppercase tracking-wider block mb-0.5">
                      Notes
                    </span>
                    <p className="whitespace-pre-line leading-relaxed">{data.notes}</p>
                  </div>
                )}
                {data.terms && (
                  <div>
                    <span className="font-bold text-neutral-700 uppercase tracking-wider block mb-0.5">
                      Terms & Conditions
                    </span>
                    <p className="whitespace-pre-line leading-relaxed">{data.terms}</p>
                  </div>
                )}
              </div>
            )}

            {/* Discreet Meshalive Attribution (The Organic Growth Hook) */}
            {data.showAttribution && (
              <div className="mt-10 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>
                  Generated free with{' '}
                  <a
                    href="https://meshalive.com/tools/invoice-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-600 hover:underline"
                  >
                    Meshalive In-Browser Invoice Generator
                  </a>
                </span>
                <span>100% Private • Zero Data Stored</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
