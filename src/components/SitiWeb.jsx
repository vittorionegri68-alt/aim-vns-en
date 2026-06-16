// SitiWeb.jsx â AI'm by VNS EN
// v1 â Custom design section with styles link and live portfolio
import { useEffect, useRef } from 'react'

const sitiLive = [
  {
    label: 'Holiday home Â· 3 languages',
    title: 'Casa Cavour',
    desc: 'Historic holiday home in Bertinoro, Italy. Available in Italian, English and Dutch with full AI optimisation.',
    url: 'https://www.casa-cavour.com',
    domain: 'casa-cavour.com',
  },
  {
    label: 'Holiday apartment Â· 2 languages',
    title: 'Garibaldina 75',
    desc: 'Apartment in Romagna. Available in Italian and English, built for AI search visibility.',
    url: 'https://garibaldina-75.romagna-affitti-brevi.it',
    domain: 'garibaldina-75.romagna-affitti-brevi.it',
  },
  {
    label: 'Luxury loft Â· 2 languages',
    title: 'Samilla',
    desc: 'Luxury loft in Romagna. Refined design, premium positioning, two languages.',
    url: 'https://samilla.romagna-affitti-brevi.it',
    domain: 'samilla.romagna-affitti-brevi.it',
  },
]

export default function SitiWeb() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="websites"
      ref={ref}
      style={{
        background: '#080808',
        padding: 'clamp(64px,8vw,120px) 0',
        borderTop: '1px solid #141414',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>

        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: 'clamp(48px,6vw,80px)',
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#A0782A',
          }}>Custom design</div>
          <div style={{ height: '1px', flex: 1, background: '#141414', margin: '0 1.5rem' }} />
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: '#222', letterSpacing: '0.15em' }}>Websites</div>
        </div>

        <div className="reveal sitiweb-main" style={{ marginBottom: 'clamp(48px,6vw,80px)' }}>
          <div style={{ maxWidth: '720px' }}>
            <h2 style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              fontSize: 'clamp(36px,5vw,64px)', textTransform: 'uppercase',
              letterSpacing: '0.02em', lineHeight: 1.05,
              color: '#ffffff', marginBottom: '24px',
            }}>
              No templates.<br />
              <span style={{ color: '#A0782A' }}>Every site</span> is unique.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px,1.4vw,17px)',
              color: '#AAAAAA', lineHeight: 1.75, marginBottom: '16px',
              maxWidth: '560px',
            }}>
              We don't work with pre-made templates. Every site is built from scratch around the character of your business: palette, typography, structure and content are chosen for you, not copied from an existing scheme.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px,1.2vw,15px)',
              color: '#AAAAAA', lineHeight: 1.75, marginBottom: '36px',
              maxWidth: '560px',
            }}>
              We have 18 starting styles, each with a distinct visual identity. They are reference points, not cages: colours, fonts and structure are fully customised in every detail.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="/stili"
                style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: '#080808', background: '#A0782A',
                  padding: '14px 28px', textDecoration: 'none', display: 'inline-block',
                  transition: 'opacity 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                Explore 18 styles
              </a>

            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: '#141414', marginBottom: 'clamp(48px,6vw,72px)' }} />

        <div className="reveal" style={{ marginBottom: '16px' }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#A0782A', marginBottom: '12px',
          }}>Sites already live</div>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px,1.2vw,15px)',
            color: '#AAAAAA', lineHeight: 1.7, maxWidth: '560px',
            marginBottom: 'clamp(28px,3vw,40px)',
          }}>
            Not mockups: real sites, built with the same system. Every site was designed specifically for the business it represents.
          </p>
        </div>

        <div className="sitiweb-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '2px', marginBottom: 'clamp(32px,4vw,48px)',
        }}>
          {sitiLive.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
              className="reveal live-card"
              style={{
                background: '#0d0d0d', border: '1px solid #141414',
                padding: 'clamp(20px,2vw,28px) clamp(20px,2vw,28px) clamp(24px,2.5vw,32px)',
                textDecoration: 'none', display: 'block',
                transitionDelay: `${i * 0.08}s`, transition: 'border-color 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = '#A0782A'}
              onMouseOut={e => e.currentTarget.style.borderColor = '#141414'}
            >
              <div style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#A0782A', marginBottom: '8px',
              }}>{s.label}</div>
              <div style={{
                fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(18px,1.6vw,22px)', textTransform: 'uppercase',
                color: '#ffffff', marginBottom: '10px', letterSpacing: '0.03em',
              }}>{s.title}</div>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '13px',
                color: '#AAAAAA', lineHeight: 1.65, marginBottom: '16px',
              }}>{s.desc}</p>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '11px', color: '#A0782A', letterSpacing: '0.05em',
              }}>{s.domain} â</div>
            </a>
          ))}
        </div>

        <div className="reveal" style={{
          background: '#0d0d0d',
          border: '1px solid #141414', borderLeft: '3px solid #A0782A',
          padding: '18px 22px', maxWidth: '520px',
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#A0782A', marginBottom: '8px',
          }}>Additional service</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#AAAAAA', lineHeight: 1.65 }}>
            We also build landing pages for Instagram profiles, optimised for social-to-booking conversion.{' '}
            <a href="https://links.casa-cavour.com" target="_blank" rel="noopener noreferrer"
              style={{ color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              See a live example
            </a>.
          </p>
        </div>

      </div>
      <style>{`
        .sitiweb-grid { grid-template-columns: repeat(3,1fr); }
        @media (max-width: 900px) { .sitiweb-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .sitiweb-main a { width: 100%; text-align: center; } }
      `}</style>
    </section>
  )
}
