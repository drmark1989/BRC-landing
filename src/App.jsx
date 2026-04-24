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
          <div className="phone-header-sub">Marco&apos;s Bistro</div>
        </div>
        <div className="phone-body">
          <div className="phone-order-tag">Your order · Table 7</div>
          <div className="phone-biz">How was your Margherita Pizza?</div>
          <div className="phone-stars">
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`star ${i <= 4 ? 'star-on' : 'star-half'}`}>★</span>
            ))}
          </div>
          <div className="phone-divider" />
          <div className="phone-metrics">
            {[['Flavour', 95], ['Temperature', 100], ['Presentation', 78]].map(([label, pct]) => (
              <div key={label} className="metric-row">
                <span className="metric-label">{label}</span>
                <div className="metric-track">
                  <div className="metric-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <textarea className="phone-comment" readOnly value="Loved the crust, sauce was perfect!" />
          <button className="phone-cta">Submit &amp; Claim My Reward →</button>
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
            Recover bad experiences,<br />
            <span className="grad-text">grow reviews, keep customers.</span>
          </h1>
          <p className="hero-p">
            BRC captures private feedback tied to each customer&apos;s order,
            rewards them with a discount for sharing it, resolves problems before
            they go public, and follows up naturally to grow your reputation —
            all without lifting a finger.
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
              <span>Trusted by <strong>2,400+</strong> local businesses</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <PhoneMockup />

          <div className="float-card fc-review">
            <div className="fc-platform">
              <span className="fc-discount-tag">🎁</span>
              <span className="fc-platform-name">Reward sent</span>
            </div>
            <div className="fc-stars-sm">★★★★★</div>
            <div className="fc-quote">Code <strong>SAVE15</strong> delivered via SMS</div>
          </div>

          <div className="float-card fc-sms">
            <div className="fc-sms-icon">💬</div>
            <div className="fc-sms-body">
              <div className="fc-sms-title">Follow-up sent · 3 days later</div>
              <div className="fc-sms-sub">Review request delivered naturally</div>
            </div>
            <div className="fc-sms-check">✓</div>
          </div>

          <div className="float-card fc-stat">
            <div className="fc-stat-val">+67%</div>
            <div className="fc-stat-label">Review lift this month</div>
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
  { value: '48k+', label: 'Private feedback tickets' },
  { value: '18.5k+', label: 'SMS win-back campaigns' },
  { value: '9.7k+', label: 'Tracked discount redemptions' },
  { value: '+67%', label: 'Average review lift' },
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
    icon: '📋',
    accent: 'var(--purple)',
    title: 'Feedback Tied to Their Order',
    body: 'Customers don\'t get a generic form — they get questions about what they actually ordered. Every piece of feedback is contextual, specific, and far more actionable.',
    tag: 'Core',
  },
  {
    icon: '🎁',
    accent: 'var(--green)',
    title: 'Instant Discount for Honest Feedback',
    body: 'Every customer who leaves feedback gets a personalised discount code delivered immediately. They feel appreciated. You get real data. Everyone wins.',
    tag: 'Retention',
  },
  {
    icon: '🔒',
    accent: 'var(--blue)',
    title: 'Catch Problems Before They Go Public',
    body: 'Unhappy customers can raise issues privately with your business. Your team resolves it before it becomes a public complaint — protecting your reputation while the experience is still salvageable.',
    tag: 'Protection',
  },
  {
    icon: '💬',
    accent: 'var(--cyan)',
    title: 'Natural Review Follow-Up',
    body: 'Days after the visit, BRC sends a warm, natural follow-up asking customers to share their experience publicly — on Google, Yelp, TripAdvisor, or Trustpilot, whichever you choose.',
    tag: 'Growth',
  },
  {
    icon: '📣',
    accent: 'var(--yellow)',
    title: 'SMS Win-Back Campaigns',
    body: 'Haven\'t seen a customer in a while? BRC identifies who\'s gone quiet and automatically sends them a compelling offer to bring them back — timed right, personalised, trackable.',
    tag: 'Revenue',
  },
  {
    icon: '📊',
    accent: 'var(--orange)',
    title: 'Staff, Menu & Campaign Analytics',
    body: 'See staff performance scores, which menu items get the best feedback, which campaigns convert, and how your public reputation is trending — all from one dashboard.',
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
            Built for what actually<br />
            <span className="grad-text">happens in your business</span>
          </h2>
          <p className="section-p">
            Not a generic CRM. Not just a review monitor. BRC is designed around the real daily loop — feedback in, issues resolved, customers followed up at the right time.
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
    title: 'Customer Scans & Gives Feedback',
    body: 'Place QR codes on tables, receipts, or counters. Customers scan and answer questions about their specific order — food items, service, atmosphere. It\'s personal, not generic.',
    tip: 'Feedback forms are generated dynamically based on what the customer ordered.',
    visual: (
      <div className="step-visual sv-setup">
        <div className="sv-qr">
          <div className="qr-grid">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`qr-cell ${[0,1,2,5,6,7,8,9,12,16,17,19,20,21,22,24].includes(i) ? 'qr-on' : ''}`} />
            ))}
          </div>
        </div>
        <div className="sv-label">Scan → Your order, your questions</div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'They Get Rewarded Instantly',
    body: 'As soon as feedback is submitted, the customer receives a personalised discount code via SMS. They feel valued — and you get genuine, honest feedback worth acting on.',
    tip: 'Businesses offering a reward see 3× more feedback submissions.',
    visual: (
      <div className="step-visual sv-scan">
        <div className="sv-reward">
          <div className="sv-reward-icon">🎁</div>
          <div className="sv-reward-code">SAVE15</div>
          <div className="sv-reward-label">Delivered via SMS · Instantly</div>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'BRC Follows Up Naturally',
    body: 'Days after their visit, BRC sends a warm, well-timed message asking them to share their experience on the review platform you choose — Google, Yelp, TripAdvisor, or Trustpilot.',
    tip: 'Average businesses see a 67% lift in public reviews within 90 days.',
    visual: (
      <div className="step-visual sv-grow">
        <div className="sv-chart">
          {[20, 35, 30, 55, 50, 75, 70, 90].map((h, i) => (
            <div key={i} className="sv-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="sv-chart-label">Public reviews over time ↑</div>
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
            Three steps.<br />
            <span className="grad-text">Running before lunch.</span>
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
  'You choose which platform to grow',
  'Follow-ups feel natural, not automated',
  'AI flags fake & suspicious reviews',
  'Real-time notifications for new reviews',
]

function Platforms() {
  return (
    <section className="section platforms-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Review Monitoring</div>
          <h2 className="section-h2">
            Your choice of platform.<br />
            <span className="grad-text">One place to manage all of them.</span>
          </h2>
          <p className="section-p">
            Choose where you want to grow your reviews. BRC follows up with customers on your behalf — naturally, and on the platform that matters most to your business.
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
    label: 'Private Recovery',
    desc: 'Unhappy customers resolve their issue privately with your team — before it ever becomes a public complaint.',
  },
  {
    icon: '🎁',
    color: '#10b981',
    label: 'Feedback Reward',
    desc: 'Every customer who submits feedback gets an instant discount code. Higher submission rates, genuine data, and a reason to come back.',
  },
  {
    icon: '👋',
    color: '#8b5cf6',
    label: 'Win-Back Campaign',
    desc: "Re-engage customers who haven't visited in 45 days with a compelling, personalised offer that's timed perfectly.",
  },
]

function Campaigns() {
  return (
    <section className="section campaigns-section">
      <div className="container">
        <div className="campaigns-layout">
          <div className="campaigns-copy">
            <div className="section-tag">Automated Journeys</div>
            <h2 className="section-h2">
              Set it once.<br />
              <span className="grad-text">Grow forever.</span>
            </h2>
            <p className="section-p" style={{ textAlign: 'left', maxWidth: 'none' }}>
              BRC runs the right communication at exactly the right moment — recovery, rewards, review requests, and win-backs — without you having to think about it.
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
    desc: 'Get started, collect feedback, and see how your customers really feel.',
    cta: 'Start for Free',
    highlight: false,
    badge: null,
    features: [
      '1 location',
      '50 feedback forms / month',
      'QR code & order-based feedback',
      'Basic analytics dashboard',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    monthly: 49,
    annual: 39,
    desc: 'For growing businesses serious about retention and reputation.',
    cta: 'Start 14-Day Trial',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Up to 3 locations',
      'Unlimited feedback forms',
      'Instant discount rewards for feedback',
      'Natural review follow-up (your platform)',
      'SMS campaigns (200 credits / mo)',
      'Win-back & recovery journeys',
      'Staff & menu performance tracking',
      'Priority support',
    ],
  },
  {
    name: 'Pro',
    monthly: 99,
    annual: 79,
    desc: 'For multi-location businesses that want everything working on autopilot.',
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
    q: 'How is the feedback form personalised to each customer?',
    a: 'When a customer scans the QR code, BRC generates questions based on what they ordered — so instead of a generic "how was your visit?", they\'re asked specifically about their dish, the service they received, or the experience at their table. This makes the feedback far more useful and the form feel far more natural to fill in.',
  },
  {
    q: 'Do customers have to download an app to leave feedback?',
    a: 'No. Customers scan the QR code with their phone camera and the feedback form opens instantly in their browser. No app download, no sign-up — just a quick, frictionless experience that takes under 60 seconds.',
  },
  {
    q: 'How does the discount reward work?',
    a: 'As soon as a customer submits their feedback, they receive a personalised discount code via SMS. The code is unique to them, trackable, and can be set to expire after a time of your choosing. Businesses using rewards typically see 3× more feedback submissions.',
  },
  {
    q: 'When and how does BRC ask for public reviews?',
    a: 'BRC sends a natural, well-timed follow-up message a few days after the visit — not immediately. The message feels like a genuine check-in rather than an automated prompt, and directs customers to whichever platform you want to grow: Google, Yelp, TripAdvisor, or Trustpilot.',
  },
  {
    q: 'What happens when a customer leaves negative feedback?',
    a: 'Unhappy customers are given a private channel to share their concerns directly with your business — before they consider posting a public review. Your team can resolve the issue, respond personally, and turn a bad experience into a reason to return.',
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
            Start with your business,<br />
            <span className="grad-text">not a setup marathon.</span>
          </h2>
          <p className="cta-p">
            Create your account, connect your business, and start collecting
            feedback and growing your reputation from the same app — today.
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
            Recover bad experiences, grow reviews,<br />
            and bring customers back — on autopilot.<br />
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
