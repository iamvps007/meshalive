import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://meshalive.com';
  const now = new Date();
  const monthly = 'monthly' as const;
  const weekly = 'weekly' as const;
  const yearly = 'yearly' as const;
  const hourly = 'hourly' as const;

  return [
    // ── Core pages ──────────────────────────────────────────
    { url: base,                          lastModified: now, changeFrequency: weekly,  priority: 1.0 },
    { url: `${base}/pricing`,             lastModified: now, changeFrequency: monthly, priority: 0.9 },
    { url: `${base}/features`,            lastModified: now, changeFrequency: monthly, priority: 0.9 },
    { url: `${base}/about`,               lastModified: now, changeFrequency: monthly, priority: 0.7 },
    { url: `${base}/contact`,             lastModified: now, changeFrequency: yearly,  priority: 0.5 },
    { url: `${base}/docs`,                lastModified: now, changeFrequency: weekly,  priority: 0.85 },
    { url: `${base}/status`,              lastModified: now, changeFrequency: hourly,  priority: 0.6 },
    { url: `${base}/site-map`,            lastModified: now, changeFrequency: monthly, priority: 0.4 },

    // ── Legal ───────────────────────────────────────────────
    { url: `${base}/privacy`,             lastModified: now, changeFrequency: yearly,  priority: 0.4 },
    { url: `${base}/terms`,               lastModified: now, changeFrequency: yearly,  priority: 0.4 },
    { url: `${base}/refund`,              lastModified: now, changeFrequency: yearly,  priority: 0.3 },
    { url: `${base}/cookies`,             lastModified: now, changeFrequency: yearly,  priority: 0.3 },

    // ── Tools hub ───────────────────────────────────────────
    { url: `${base}/tools`,                             lastModified: now, changeFrequency: weekly,  priority: 0.98 },

    // ── Tools: URL shortening ────────────────────────────────
    { url: `${base}/tools/url-shortener`,               lastModified: now, changeFrequency: weekly,  priority: 0.95 },
    { url: `${base}/tools/qr-code-generator`,           lastModified: now, changeFrequency: weekly,  priority: 0.9  },
    { url: `${base}/tools/link-in-bio`,                 lastModified: now, changeFrequency: weekly,  priority: 0.85 },
    { url: `${base}/tools/url-shortener-with-analytics`,lastModified: now, changeFrequency: monthly, priority: 0.9  },
    { url: `${base}/tools/url-shortener-for-whatsapp`,  lastModified: now, changeFrequency: monthly, priority: 0.9  },
    { url: `${base}/tools/url-shortener-for-instagram`, lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/tools/url-shortener-india`,         lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/tools/custom-url-shortener`,        lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/tools/branded-url-shortener`,       lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/tools/link-management-tool`,        lastModified: now, changeFrequency: monthly, priority: 0.85 },
    { url: `${base}/tools/redirect-checker`, lastModified: now, changeFrequency: weekly, priority: 0.92 },
    { url: `${base}/tools/link-preview-checker`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/tools/vcard-generator`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/tools/temporary-link-generator`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/tools/affiliate-link-cloaker`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/tools/deep-link-generator`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/tools/whatsapp-landing-page`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/tools/whatsapp-link-generator`,     lastModified: now, changeFrequency: weekly,  priority: 0.96 },

    // ── Tools: Marketing & analytics ────────────────────────
    { url: `${base}/tools/utm-builder`,                 lastModified: now, changeFrequency: weekly,  priority: 0.97 },
    { url: `${base}/tools/character-counter`,           lastModified: now, changeFrequency: weekly,  priority: 0.85 },
    { url: `${base}/tools/slug-generator`,              lastModified: now, changeFrequency: weekly,  priority: 0.85 },

    // ── Tools: Developer utilities ───────────────────────────
    { url: `${base}/tools/url-encoder-decoder`,         lastModified: now, changeFrequency: weekly,  priority: 0.9  },
    { url: `${base}/tools/password-generator`,          lastModified: now, changeFrequency: weekly,  priority: 0.9  },
    { url: `${base}/tools/bulk-url-shortener`,          lastModified: now, changeFrequency: weekly,  priority: 0.9  },

    // ── Tools: Competitor alternatives ──────────────────────
    { url: `${base}/tools/bitly-alternative`,           lastModified: now, changeFrequency: weekly,  priority: 0.94 },
    { url: `${base}/tools/tinyurl-alternative`,         lastModified: now, changeFrequency: monthly, priority: 0.9  },
    { url: `${base}/tools/rebrandly-alternative`,       lastModified: now, changeFrequency: monthly, priority: 0.85 },

    // ── Solutions ───────────────────────────────────────────
    { url: `${base}/solutions/marketing`,   lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/solutions/creators`,    lastModified: now, changeFrequency: monthly, priority: 0.8 },
    { url: `${base}/solutions/developers`,  lastModified: now, changeFrequency: monthly, priority: 0.8 },

    // ── Blog ────────────────────────────────────────────────
    { url: `${base}/blog`,                              lastModified: now, changeFrequency: weekly,  priority: 0.8  },
    { url: `${base}/blog/how-to-shorten-a-url`,         lastModified: now, changeFrequency: yearly,  priority: 0.75 },
    { url: `${base}/blog/url-shortener-with-analytics`, lastModified: now, changeFrequency: yearly,  priority: 0.75 },
    { url: `${base}/blog/url-shortener-for-instagram`,  lastModified: now, changeFrequency: yearly,  priority: 0.75 },
    { url: `${base}/blog/url-shortener-api`,            lastModified: now, changeFrequency: yearly,  priority: 0.75 },
    { url: `${base}/blog/utm-parameters-guide`,         lastModified: now, changeFrequency: yearly,  priority: 0.75 },
    { url: `${base}/blog/bitly-alternatives`,           lastModified: now, changeFrequency: yearly,  priority: 0.8  },
    { url: `${base}/blog/tinyurl-alternative`,          lastModified: now, changeFrequency: yearly,  priority: 0.8  },
    { url: `${base}/blog/free-qr-code-generator`,       lastModified: now, changeFrequency: yearly,  priority: 0.75 },
    { url: `${base}/blog/custom-short-url`,             lastModified: now, changeFrequency: yearly,  priority: 0.75 },
  ];
}
