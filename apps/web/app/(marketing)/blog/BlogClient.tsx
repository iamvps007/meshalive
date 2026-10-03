'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Article } from './page';

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Guides: { bg: '#e0f2fe', text: '#0369a1', border: '#bae6fd' },
  Comparisons: { bg: '#fef3c7', text: '#b45309', border: '#fde68a' },
  'Social Media': { bg: '#dcfce7', text: '#15803d', border: '#bbf7d0' },
  'QR Codes': { bg: '#f3e8ff', text: '#7e22ce', border: '#e9d5ff' },
  Developer: { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' },
};

const CATEGORIES = ['All', 'Guides', 'Comparisons', 'Social Media', 'QR Codes', 'Developer'] as const;

export default function BlogClient({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const featured = articles.find((a) => a.featured) || articles[0];

  const filtered = articles.filter((a) => {
    const matchesCat = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', padding: '48px 24px 96px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: '#64748b', marginBottom: 24 }}>
          <Link href="/" style={{ color: '#0f172a', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#2563eb', fontWeight: 600 }}>Blog</span>
        </nav>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 700,
              color: '#1d4ed8',
              marginBottom: 16,
            }}
          >
            📚 Knowledge Base & Growth Guides
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            The Meshalive Blog
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: '#475569', lineHeight: 1.6, margin: '0 auto' }}>
            In-depth guides, API documentation, and conversion playbooks on URL shortening, real-time telemetry, and smart QR codes.
          </p>
        </div>

        {/* Featured Article Card */}
        {featured && activeCategory === 'All' && !searchQuery && (
          <div
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderRadius: 20,
              padding: 'clamp(28px, 4vw, 44px)',
              color: '#ffffff',
              marginBottom: 56,
              boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span
                style={{
                  background: '#f97316',
                  color: '#ffffff',
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: 6,
                }}
              >
                Featured Guide
              </span>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>
                {featured.read} · {featured.date}
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800, lineHeight: 1.25, marginBottom: 14, maxWidth: 800 }}>
              <Link href={`/blog/${featured.slug}`} style={{ color: '#ffffff', textDecoration: 'none' }}>
                {featured.title}
              </Link>
            </h2>

            <p style={{ fontSize: 15, color: '#cbd5e1', lineHeight: 1.65, maxWidth: 720, marginBottom: 24 }}>
              {featured.excerpt}
            </p>

            <Link
              href={`/blog/${featured.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#2563eb',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 22px',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Read Complete Guide →
            </Link>
          </div>
        )}

        {/* Filter Bar & Search */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            marginBottom: 36,
            paddingBottom: 20,
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          {/* Category Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    background: active ? '#0f172a' : '#f1f5f9',
                    color: active ? '#ffffff' : '#475569',
                    border: 'none',
                    transition: 'all 120ms ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div style={{ minWidth: 260 }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 14px',
                fontSize: 13.5,
                border: '1px solid #cbd5e1',
                borderRadius: 8,
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#1e293b' }}>No articles match your search</div>
            <p style={{ fontSize: 14, marginTop: 6 }}>Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              style={{
                marginTop: 14,
                padding: '8px 18px',
                background: '#0f172a',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Show all articles
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {filtered.map((article) => {
              const theme = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.Guides;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 16,
                      padding: 24,
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(15,23,42,0.08)';
                      e.currentTarget.style.borderColor = '#94a3b8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.03)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            background: theme.bg,
                            color: theme.text,
                            border: `1px solid ${theme.border}`,
                            padding: '2px 8px',
                            borderRadius: 6,
                          }}
                        >
                          {article.category}
                        </span>
                        <span style={{ fontSize: 12, color: '#94a3b8' }}>{article.read}</span>
                      </div>

                      <h3
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          color: '#0f172a',
                          lineHeight: 1.35,
                          marginBottom: 10,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {article.title}
                      </h3>

                      <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.6, margin: 0 }}>
                        {article.excerpt}
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: 20,
                        paddingTop: 14,
                        borderTop: '1px solid #f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: '#2563eb',
                      }}
                    >
                      <span>Read article</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Newsletter / Stay Ahead Box */}
        <div
          style={{
            marginTop: 72,
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 20,
            padding: 'clamp(28px, 4vw, 44px)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 8 }}>
            Stay Ahead
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>
            Get Monthly Growth Tactics & Engineering Updates
          </h2>
          <p style={{ fontSize: 14, color: '#64748b', maxWidth: 520, margin: '0 auto 20px', lineHeight: 1.6 }}>
            Join 3,000+ engineers and digital marketers receiving our monthly link optimization teardown. Zero spam.
          </p>

          {subscribed ? (
            <div style={{ display: 'inline-block', padding: '10px 20px', background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 8, color: '#15803d', fontWeight: 700, fontSize: 14 }}>
              ✓ You are subscribed! Watch your inbox for our next edition.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Enter your work email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 220,
                  padding: '10px 14px',
                  fontSize: 14,
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  background: '#0f172a',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
