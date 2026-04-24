import { useState, useEffect } from 'react'
import './App.css'

// ─── NAV ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <span className="logo-mark" />
          BRC
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#" className="btn btn-ghost">Sign In</a>
          <a href="#pricing" className="btn btn-primary">Start Free</a>
        </div>
        <button
          className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile ${mobileOpen ? 'nav-mobile-open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#pricing" className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => setMobileOpen(false)}>
          Start Free
        </a>
      </div>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-header">
          <div className="phone-header-logo">⬡ BRC</div>
          <div className="phone-header-sub">Live Feedback</div>
        </div>
        <div className="phone-body">
          <div className="phone-biz">Marco&apos;s Bistro</div>
          <p className="phone-prompt">How was your experience today?</p>
          <div className="phone-stars">
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`star ${i <= 4 ? 'star-on' : 'star-half'}`}>★</span>
            ))}
          </div>
          <div className="phone-divider" />
          <div className="phone-metrics">
            {[['Food Quality', 92], ['Service', 100], ['Ambience', 78]].map(([label, pct]) => (
              <div key={label} className="metric-row">
                <span className="metric-label">{label}</span>
                <div className="metric-track">
                  <div className="metric-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <textarea className="phone-comment" readOnly value="Great pasta, will come back!" />
          <button className="phone-cta">Submit &amp; Get My Discount →</button>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="glow glow-3" />
        <div className="grid-overlay" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="badge-pulse" />
            Available on iOS · Android · Web
          </div>
          <h1 className="hero-h1">
            Turn every visit into a<br />
            <span className="grad-text">glowing review</span>
          </h1>
          <p className="hero-p">
            BRC captures honest feedback at the point of experience, automatically
            routes happy customers to Google and Yelp, and wins back unhappy ones
            with targeted SMS campaigns — all on autopilot.
          </p>
          <div className="hero-btns">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start for Free <span className="arrow">→</span>
            </a>
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              See How It Works
            </a>
          </div>
          <div className="hero-social-proof">
            <div className="sp-avatars">
              {['M','J','S','A','R'].map(l => (
                <div key={l} className="sp-avatar">{l}</div>
              ))}
            </div>
            <div className="sp-text">
              <span className="sp-stars">★★★★★</span>
              <span>Loved by <strong>2,400+</strong> businesses</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <PhoneMockup />

          <div className="float-card fc-review">
            <div className="fc-platform">
              <span className="g-dot">G</span>
              <span className="fc-platform-name">Posted to Google</span>
            </div>
            <div className="fc-stars-sm">★★★★★</div>
            <div className="fc-quote">&ldquo;Amazing food, will definitely be back!&rdquo;</div>
          </div>

          <div className="float-card fc-sms">
            <div className="fc-sms-icon">💬</div>
            <div className="fc-sms-body">
              <div className="fc-sms-title">SMS Sent</div>
              <div className="fc-sms-sub">Code <strong>SAVE20</strong> delivered</div>
            </div>
            <div className="fc-sms-check">✓</div>
          </div>

          <div className="float-card fc-stat">
            <div className="fc-stat-val">+47%</div>
            <div className="fc-stat-label">More reviews this month</div>
            <div className="fc-stat-spark">
              {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                <div key={i} className="spark-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-dot" />
      </div>
    </section>
  )
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────

const STATS = [
  { value: '2,400+', label: 'Businesses active' },
  { value: '1.2M+', label: 'Feedback collected' },
  { value: '68%', label: 'More 5-star reviews' },
  { value: '4.9 ★', label: 'Average app rating' },
]

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-inner">
        {STATS.map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: '📱',
    accent: 'var(--purple)',
    title: 'QR Feedback at the Moment',
    body: 'Place QR codes on tables, receipts, or counters. Customers scan and rate in seconds — capturing genuine sentiment while the experience is still fresh.',
    tag: 'Core',
  },
  {
    icon: '⭐',
    accent: 'var(--yellow)',
    title: 'Amplify Happy Customers',
    body: 'When customers rate 4–5 stars, BRC automatically guides them to leave a public review on Google, Yelp, TripAdvisor, or Trustpilot.',
    tag: 'Growth',
  },
  {
    icon: '💬',
    accent: 'var(--cyan)',
    title: 'SMS Campaigns & Discounts',
    body: 'Send targeted SMS campaigns with personalised discount codes. Reward loyal customers, recover unhappy ones, and win back lost visitors — automatically.',
    tag: 'Revenue',
  },
  {
    icon: '🔍',
    accent: 'var(--blue)',
    title: 'Monitor All Review Platforms',
    body: 'Track every review across Google, Yelp, TripAdvisor, and Trustpilot from one dashboard. Get real-time notifications and never miss what customers are saying.',
    tag: 'Monitoring',
  },
  {
    icon: '🤖',
    accent: 'var(--green)',
    title: 'AI Review Analysis',
    body: 'Our AI automatically flags suspicious or fake reviews so you can focus on genuine feedback and respond strategically. Understand trends before they become problems.',
    tag: 'AI',
  },
  {
    icon: '📊',
    accent: 'var(--orange)',
    title: 'Powerful Analytics Dashboard',
    body: 'Track ratings over time, campaign redemption rates, staff performance scores, and revenue impact — with clean charts that tell the real story at a glance.',
    tag: 'Insights',
  },
]

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Features</div>
          <h2 className="section-h2">
            Everything you need to<br />
            <span className="grad-text">own your reputation</span>
          </h2>
          <p className="section-p">
            BRC gives local businesses the tools enterprise brands use — at a price that actually makes sense.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon-wrap" style={{ '--accent': f.accent }}>
                <span className="feature-emoji">{f.icon}</span>
              </div>
              <div className="feature-tag">{f.tag}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    title: 'Set Up in 5 Minutes',
    body: 'Create your business profile, generate your custom QR code, and place it anywhere customers interact with you — table tents, receipts, counter cards, or digital displays.',
    tip: 'No technical knowledge required. QR codes are print-ready immediately.',
    visual: (
      <div className="step-visual sv-setup">
        <div className="sv-qr">
          <div className="qr-grid">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`qr-cell ${[0,1,2,5,6,7,8,9,12,16,17,19,20,21,22,24].includes(i) ? 'qr-on' : ''}`} />
            ))}
          </div>
        </div>
        <div className="sv-label">Your QR Code</div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Customers Scan & Rate',
    body: 'Customers scan the QR code and leave honest feedback — rating their overall experience, individual metrics like food or service, and specific staff members.',
    tip: 'Happy customers (4-5 ★) are guided to your public Google or Yelp page.',
    visual: (
      <div className="step-visual sv-scan">
        <div className="sv-stars">
          {[1,2,3,4,5].map(i => <span key={i} className="sv-star">★</span>)}
        </div>
        <div className="sv-route">
          <div className="route-branch">
            <div className="route-dot route-happy">😊</div>
            <div className="route-label route-label-happy">→ Google Review</div>
          </div>
          <div className="route-branch">
            <div className="route-dot route-sad">😕</div>
            <div className="route-label route-label-sad">→ Private Resolution</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Grow on Autopilot',
    body: 'BRC automatically sends discount codes, win-back SMS campaigns, and review prompts. Your reputation grows while you focus on delivering a great experience.',
    tip: 'Average businesses see 68% more public reviews within 90 days.',
    visual: (
      <div className="step-visual sv-grow">
        <div className="sv-chart">
          {[20, 35, 30, 55, 50, 75, 70, 90].map((h, i) => (
            <div key={i} className="sv-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="sv-chart-label">Reviews Over Time ↑</div>
      </div>
    ),
  },
]

function HowItWorks() {
  return (
    <section className="section hiw-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">How It Works</div>
          <h2 className="section-h2">
            Up and running<br />
            <span className="grad-text">before lunch</span>
          </h2>
        </div>
        <div className="hiw-grid">
          {STEPS.map((s, i) => (
            <div key={s.num} className="hiw-card">
              <div className="hiw-num">{s.num}</div>
              {s.visual}
              <h3 className="hiw-title">{s.title}</h3>
              <p className="hiw-body">{s.body}</p>
              <div className="hiw-tip">
                <span className="tip-icon">💡</span>
                {s.tip}
              </div>
              {i < STEPS.length - 1 && <div className="hiw-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── REVIEW PLATFORMS ─────────────────────────────────────────────────────────

const PLATFORMS = [
  { name: 'Google', letter: 'G', color: '#4285F4', reviews: '2.1M+ reviews tracked' },
  { name: 'Yelp', letter: 'Y', color: '#FF1A1A', reviews: '880k+ reviews tracked' },
  { name: 'Tripadvisor', letter: 'T', color: '#00AA6C', reviews: '590k+ reviews tracked' },
  { name: 'Trustpilot', letter: 'tp', color: '#00B67A', reviews: '410k+ reviews tracked' },
]

const PLATFORM_FEATURES = [
  'AI flags fake & suspicious reviews',
  'Real-time new review notifications',
  'Side-by-side competitor tracking',
  'Historical rating trend charts',
]

function Platforms() {
  return (
    <section className="section platforms-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Review Monitoring</div>
          <h2 className="section-h2">
            Every platform.<br />
            <span className="grad-text">One dashboard.</span>
          </h2>
          <p className="section-p">
            Stop bouncing between tabs. BRC pulls every review from every major platform into a single feed you can actually manage.
          </p>
        </div>
        <div className="platforms-grid">
          {PLATFORMS.map(p => (
            <div key={p.name} className="platform-card">
              <div className="platform-icon" style={{ background: p.color }}>
                {p.letter}
              </div>
              <div className="platform-name">{p.name}</div>
              <div className="platform-count">{p.reviews}</div>
            </div>
          ))}
        </div>
        <div className="platform-checklist">
          {PLATFORM_FEATURES.map(f => (
            <div key={f} className="platform-check">
              <span className="check-icon">✓</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CAMPAIGNS ────────────────────────────────────────────────────────────────

const JOURNEYS = [
  {
    icon: '💔',
    color: '#ef4444',
    label: 'Low Rating Recovery',
    desc: 'Reach out to dissatisfied customers within 24 hours with a personalised discount and a genuine apology.',
  },
  {
    icon: '⭐',
    color: '#f59e0b',
    label: 'High Rating Thank-You',
    desc: 'Reward your best customers automatically and keep them coming back with exclusive loyalty offers.',
  },
  {
    icon: '👋',
    color: '#8b5cf6',
    label: 'Win-Back Campaign',
    desc: "Re-engage customers who haven't visited in 45 days with a compelling comeback offer they can't ignore.",
  },
]

function Campaigns() {
  return (
    <section className="section campaigns-section">
      <div className="container">
        <div className="campaigns-layout">
          <div className="campaigns-copy">
            <div className="section-tag">Automated Campaigns</div>
            <h2 className="section-h2">
              Set it once.<br />
              <span className="grad-text">Grow forever.</span>
            </h2>
            <p className="section-p" style={{ textAlign: 'left', maxWidth: 'none' }}>
              BRC&apos;s automated journeys send the right message to the right customer at exactly the right time — without you doing a thing.
            </p>
            <div className="journey-list">
              {JOURNEYS.map(j => (
                <div key={j.label} className="journey-item">
                  <div className="journey-icon" style={{ background: `${j.color}20`, color: j.color }}>
                    {j.icon}
                  </div>
                  <div>
                    <div className="journey-label">{j.label}</div>
                    <div className="journey-desc">{j.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="campaigns-mockup">
            <div className="cm-topbar">
              <div className="cm-title">Campaign Performance</div>
              <div className="cm-badge">Last 30 days</div>
            </div>
            <div className="cm-kpis">
              <div className="cm-kpi">
                <div className="cm-kpi-val" style={{ color: '#a78bfa' }}>1,284</div>
                <div className="cm-kpi-label">SMS Sent</div>
              </div>
              <div className="cm-kpi">
                <div className="cm-kpi-val" style={{ color: '#34d399' }}>328</div>
                <div className="cm-kpi-label">Redeemed</div>
              </div>
              <div className="cm-kpi">
                <div className="cm-kpi-val" style={{ color: '#fbbf24' }}>25.5%</div>
                <div className="cm-kpi-label">Rate</div>
              </div>
            </div>
            <div className="cm-chart-area">
              <div className="cm-bars">
                {[40, 65, 45, 80, 60, 95, 78].map((h, i) => (
                  <div key={i} className="cm-bar-col">
                    <div className="cm-bar" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="cm-days">
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                  <div key={d} className="cm-day">{d}</div>
                ))}
              </div>
            </div>
            <div className="cm-footer">
              <div className="cm-footer-item">
                <span className="cm-dot cm-dot-sent" />Top campaign: Win-Back
              </div>
              <div className="cm-footer-item cm-footer-up">↑ 18% vs last month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ──────────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: 'Free',
    monthly: 0,
    annual: 0,
    desc: 'Perfect for getting started and collecting your first reviews.',
    cta: 'Start for Free',
    highlight: false,
    badge: null,
    features: [
      '1 location',
      '50 feedback forms / month',
      'QR code feedback collection',
      'Basic analytics dashboard',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    monthly: 49,
    annual: 39,
    desc: 'For growing businesses serious about their online reputation.',
    cta: 'Start 14-Day Trial',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 3 locations',
      'Unlimited feedback forms',
      'SMS campaigns (200 credits / mo)',
      'Review monitoring — 4 platforms',
      'Automated win-back journeys',
      'Staff performance tracking',
      'Priority support',
    ],
  },
  {
    name: 'Pro',
    monthly: 99,
    annual: 79,
    desc: 'For multi-location businesses and power users who need everything.',
    cta: 'Start 14-Day Trial',
    highlight: false,
    badge: null,
    features: [
      'Unlimited locations',
      'Unlimited feedback forms',
      'SMS campaigns (800 credits / mo)',
      'Review monitoring — 4 platforms',
      'AI fake review detection',
      'All automated journeys',
      'Advanced analytics & CSV exports',
      'Dedicated account manager',
    ],
  },
]

function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Pricing</div>
          <h2 className="section-h2">
            Simple, transparent<br />
            <span className="grad-text">pricing</span>
          </h2>
          <p className="section-p">
            No hidden fees. No long-term contracts. Start free and upgrade when you&apos;re ready.
          </p>
          <div className="billing-toggle">
            <span className={!annual ? 'tgl-active' : 'tgl-dim'}>Monthly</span>
            <button className={`tgl-btn ${annual ? 'tgl-on' : ''}`} onClick={() => setAnnual(v => !v)}>
              <span className="tgl-knob" />
            </button>
            <span className={annual ? 'tgl-active' : 'tgl-dim'}>
              Annual&nbsp;<span className="tgl-save">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="plans-grid">
          {PLANS.map(p => (
            <div key={p.name} className={`plan-card ${p.highlight ? 'plan-highlight' : ''}`}>
              {p.badge && <div className="plan-badge">{p.badge}</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <span className="plan-curr">$</span>
                <span className="plan-num">{annual ? p.annual : p.monthly}</span>
                {p.monthly > 0 && <span className="plan-per">/mo</span>}
              </div>
              {annual && p.monthly > 0 && (
                <div className="plan-billed">Billed annually · Save ${(p.monthly - p.annual) * 12}/yr</div>
              )}
              <p className="plan-desc">{p.desc}</p>
              <a
                href="#"
                className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline'} btn-block`}
              >
                {p.cta}
              </a>
              <ul className="plan-features">
                {p.features.map(f => (
                  <li key={f} className="plan-feature">
                    <span className="plan-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-addons">
          <div className="addon-icon">💬</div>
          <div>
            <strong>Need more SMS credits?</strong>
            <span className="addon-text"> Add-on packs: 100 credits for $9 · 500 credits for $39</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How do customers leave feedback?',
    a: 'You place a QR code — printed or digital — anywhere customers interact with you: table tents, receipts, counter signs, packaging, or digital displays. They scan with their phone camera and submit feedback in under 60 seconds. No app download required.',
  },
  {
    q: 'Will customers actually scan the QR code?',
    a: 'Businesses that offer a small incentive (10–20% discount) see scan rates of 30–50% of customers. Even without an incentive, QR codes at the point of experience typically convert 15–25% of customers who had a noteworthy experience.',
  },
  {
    q: 'Does BRC prevent bad reviews from going public?',
    a: "BRC doesn't block reviews — customers can still post wherever they like. What BRC does is route unhappy customers toward a private resolution before they resort to a public complaint. Happy customers (4–5 ★) are proactively guided to share on Google or Yelp.",
  },
  {
    q: 'Which review platforms do you monitor?',
    a: 'BRC monitors Google, Yelp, TripAdvisor, and Trustpilot. Reviews are pulled and analysed automatically, with AI flagging suspicious reviews and instant notifications for new activity.',
  },
  {
    q: 'How does the SMS campaign system work?',
    a: "After a customer submits feedback, BRC can send them a personalised SMS with a unique discount code. Automated journeys then handle follow-ups: win-back messages for unhappy customers, thank-you offers for happy ones, and re-engagement messages for customers who haven't visited in a while.",
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: "Yes, absolutely. Cancel any time from your account settings. You'll keep access until the end of your current billing period. No cancellation fees, no awkward phone calls.",
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-h2">
            Common <span className="grad-text">questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'faq-open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-a">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow" />
          <div className="section-tag" style={{ marginBottom: 20 }}>Get Started</div>
          <h2 className="cta-h2">
            Your reputation is<br />
            <span className="grad-text">growing right now.</span><br />
            Or it isn&apos;t.
          </h2>
          <p className="cta-p">
            Join thousands of local businesses using BRC to capture more reviews,
            retain more customers, and grow on autopilot.
          </p>
          <div className="cta-btns">
            <a href="#pricing" className="btn btn-primary btn-xl">
              Start Free Today <span className="arrow">→</span>
            </a>
            <div className="store-btns">
              <a href="#" className="store-btn">
                <span className="store-os">🍎</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="store-btn">
                <span className="store-os">🤖</span>
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
          <div className="cta-trust">
            {['Free plan available', 'No credit card required', 'Cancel any time'].map(t => (
              <span key={t} className="cta-trust-item">
                <span className="trust-check">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

const FOOTER_COLS = [
  { heading: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
  { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'] },
  { heading: 'Support', links: ['Help Center', 'Contact Us', 'System Status', 'API Docs'] },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <span className="logo-mark" />
            BRC
          </a>
          <p className="footer-tagline">
            Turn every visit into a glowing review.<br />
            Available on iOS, Android &amp; Web.
          </p>
          <div className="footer-socials">
            {['X', 'IG', 'LI'].map(s => (
              <a key={s} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>
        {FOOTER_COLS.map(col => (
          <div key={col.heading} className="footer-col">
            <div className="footer-col-h">{col.heading}</div>
            {col.links.map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">© {new Date().getFullYear()} BRC. All rights reserved.</span>
          <div className="footer-app-links">
            <a href="#" className="footer-app-link">🍎 App Store</a>
            <a href="#" className="footer-app-link">🤖 Google Play</a>
            <a href="#" className="footer-app-link">🌐 Web App</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Platforms />
        <Campaigns />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
