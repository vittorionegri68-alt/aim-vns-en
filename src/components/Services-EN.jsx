// Services-EN.jsx — AI'm by VNS EN
// v2.0 — copy rewritten for non-technical audience — june 2026
import { useEffect, useRef } from 'react'

const packages = [
  {
    nome: 'Starter',
    tag: 'First step',
    desc: "You have a website but do not know whether ChatGPT can find you? We check your current situation, tell you what is not working and deliver everything needed to fix it. One-off payment, no subscription.",
    incluso: [
      'Free first analysis — no commitment',
      'Full check of how AI search engines see you',
      'Optimised technical files ready for your website',
      'Second check at 30 days to measure improvements',
      'Google Business Profile recommendations',
    ],
    prezzo: 'From 180 EUR',
    prezzoSub: 'One-off payment · No subscription',
    cta: 'Request your audit',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Main service',
    desc: "We build your website from scratch, designed to be found by ChatGPT from day one. Then we keep it fresh with new content and show you how results grow, with real numbers. Already have a website? Let us talk: we assess every situation together.",
    incluso: [
      'Analysis of your current situation before we start',
      'New website built for AI search engines',
      'Google Business Profile — setup included',
      'Technical verification before going live',
      'Content built around your customers real questions',
      'Blog post every two weeks, automated',
      'Monthly reports for the first 3 months, then quarterly',
      'Call with Vittorio to review the data together',
      'Corrective actions included',
      'Ongoing support by email',
    ],
    prezzo: 'From 480 EUR',
    prezzoSub: '+ annual subscription from 500 EUR',
    cta: 'Talk about your project',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Maximum visibility',
    desc: "Everything in Growth, plus a Q&A page on your website, a personal dashboard with your visibility data always up to date, and automated publishing on Instagram. Your relationship with your customers stays with you.",
    incluso: [
      'Everything in Growth',
      'Q&A page with your customers top 10 real questions',
      'Personal dashboard — your visibility data always live',
      'Automated Instagram publishing',
      'Monthly reports instead of quarterly',
    ],
    prezzo: 'From 580 EUR',
    prezzoSub: '+ annual subscription from 780 EUR',
    cta: 'Talk about your project',
    highlight: false,
  },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <section id="services" ref={ref}
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0', borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A',
            marginBottom: '1rem' }}>Packages</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase',
            letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            CHOOSE YOUR<br />
            <span style={{ color: '#A0782A' }}>STARTING POINT.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,15px)',
            color: '#444', lineHeight: 1.7, marginTop: '1.5rem', maxWidth: '600px' }}>
            You work directly with Vittorio. No intermediaries.
            Every action is built together with you, explained in plain English
            and verified before going live. No jargon, no surprises.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }} className="packs-grid">
          {packages.map((p, i) => (
            <div key={i} className="reveal"
              style={{ background: p.highlight ? '#0f0f0f' : '#0a0a0a',
                padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
                borderTop: p.highlight ? '2px solid #A0782A' : '2px solid transparent',
                transitionDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: p.highlight ? '#A0782A' : '#333',
                letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.tag}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,2.5vw,40px)', color: '#ffffff',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                marginBottom: '1rem', lineHeight: 1 }}>{p.nome}</div>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,14px)',
                color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {p.incluso.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px',
                    color: '#AAAAAA', padding: '6px 0', borderBottom: '1px solid #141414',
                    display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>—</span>{item}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid #141414', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(24px,2vw,32px)', color: p.highlight ? '#A0782A' : '#ffffff',
                  letterSpacing: '0.02em', lineHeight: 1 }}>{p.prezzo}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px',
                  color: '#444', marginTop: '4px', letterSpacing: '0.05em' }}>{p.prezzoSub}</div>
              </div>
              <a href="https://calendly.com/aim-vns-info/30min" target="_blank" rel="noopener" style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: p.highlight ? '#080808' : '#ffffff',
                background: p.highlight ? '#A0782A' : 'transparent',
                border: p.highlight ? 'none' : '1px solid #1A1A1A',
                padding: '12px 24px', borderRadius: 0,
                textDecoration: 'none', display: 'inline-block',
                transition: 'all 0.2s', textAlign: 'center',
              }}
              onMouseEnter={e => {
                if (p.highlight) { e.currentTarget.style.opacity = '0.85' }
                else { e.currentTarget.style.borderColor = '#A0782A'; e.currentTarget.style.color = '#A0782A' }
              }}
              onMouseLeave={e => {
                if (p.highlight) { e.currentTarget.style.opacity = '1' }
                else { e.currentTarget.style.borderColor = '#1A1A1A'; e.currentTarget.style.color = '#ffffff' }
              }}
              >{p.cta} →</a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#333',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1.5rem', textAlign: 'center' }}>
          All prices exclude VAT · Additional language 100 EUR · Minimum 12 months for Growth and Pro
        </p>
      </div>
      <style>{`
        @media (max-width: 768px) { .packs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
