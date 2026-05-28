// Servizi.jsx — AI'm by VNS EN
// v1.1 — 04/05/2026 — testi pacchetti aggiornati
import { useEffect, useRef } from 'react'

const pacchetti = [
  {
    nome: 'Starter',
    tag: 'First step',
    desc: 'You already have a website but you are not sure whether ChatGPT, Gemini or Perplexity can find you? We measure your current AI visibility, show you what is missing and deliver the optimised technical files to close the gaps. One-time payment, no subscription.',
    incluso: [
      'Free baseline analysis in the first call — no commitment required after that',
      'Full audit: schema.org, robots.txt, llms.txt, ai.txt, sitemap',
      'Optimised technical files ready to use for your sector',
      'Second baseline at 30 days to measure improvements',
      'Google Business Profile guidance',
    ],
    prezzo: 'From 180 €',
    prezzoSub: 'One-time payment · No subscription',
    cta: 'Request your audit',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Core service',
    desc: 'We build your site from scratch, optimised to be found by ChatGPT, Perplexity and Gemini from day one. Then we keep it alive with fresh content and show you how your visibility grows, with real data. If you already have a site and want to keep it, let us talk: we assess every situation individually.',
    incluso: [
      'Baseline analysis before we start',
      'React site built from scratch, AI-optimised',
      'Google Business Profile — creation and configuration included',
      'Rich Results Test validation before deployment',
      '10 validated GEO/AEO questions for your sector',
      'Blog post every two weeks, automated',
      'Monthly reports for the first 3 months, then quarterly',
      'Post-report call with Vittorio to review data and decide next steps',
      'Execution of corrective actions',
      'Ongoing email support',
    ],
    prezzo: 'From 480 €',
    prezzoSub: '+ annual subscription from 500 €',
    cta: 'Talk about your project',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Maximum visibility',
    desc: 'Everything in Growth, plus a public Q&A section on your site, a personalised dashboard with your AI visibility data always up to date and automated Instagram content publishing. The relationship with your followers stays with you.',
    incluso: [
      'Everything in the Growth package',
      'Public Q&A block with the 10 validated questions and complete answers',
      'Personal online dashboard — AI visibility data always up to date',
      'Automated Instagram publishing',
      'Monthly reports instead of quarterly',
    ],
    prezzo: 'From 580 €',
    prezzoSub: '+ annual subscription from 780 €',
    cta: 'Talk about your project',
    highlight: false,
  },
]

export default function Servizi() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref}
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0',
        borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>

        {/* Header */}
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
            Every AI'm by VNS project is a direct collaboration with Vittorio.
            No middlemen, no off-the-shelf solutions: every intervention is built
            together with you and validated before going live.
            We are here to help you grow together.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }}
          className="packs-grid">
          {pacchetti.map((p, i) => (
            <div key={i} className="reveal"
              style={{
                background: p.highlight ? '#0f0f0f' : '#0a0a0a',
                padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
                borderTop: p.highlight ? '2px solid #A0782A' : '2px solid transparent',
                transitionDelay: `${i * 0.1}s`,
                display: 'flex', flexDirection: 'column',
              }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: p.highlight ? '#A0782A' : '#333',
                letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '0.5rem' }}>{p.tag}</div>
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
                    color: '#555', padding: '6px 0', borderBottom: '1px solid #141414',
                    display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price block */}
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
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1.5rem',
          textAlign: 'center' }}>
          All prices exclude VAT · Additional language 100 € · Minimum 12 months for Growth and Pro
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .packs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}