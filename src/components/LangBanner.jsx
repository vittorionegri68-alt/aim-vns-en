// LangBanner.jsx — AI'm by VNS EN
import { useState, useEffect } from 'react'

const LANGS = {
  it: { url: 'https://www.aim-vns.com',  msg: 'Il tuo browser è impostato in italiano.', cta: 'Vai alla versione italiana' },
  nl: { url: 'https://nl.aim-vns.com',   msg: 'Je browser is ingesteld op Nederlands.',  cta: 'Ga naar de Nederlandse versie' },
}

export default function LangBanner() {
  const [banner, setBanner] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('aim-lang-choice')) return
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase()
    if (lang.startsWith('it'))      setBanner('it')
    else if (lang.startsWith('nl')) setBanner('nl')
    // English or anything else → no banner, user is already on the right site
  }, [])

  const handleClose = () => { sessionStorage.setItem('aim-lang-choice', 'en'); setBanner(null) }
  const handleGo = (url) => { sessionStorage.setItem('aim-lang-choice', url); window.location.href = url }

  if (!banner) return null
  const { msg, cta, url } = LANGS[banner]

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: '#0d0d0d', borderBottom: '1px solid #A0782A',
      padding: '10px clamp(24px,4vw,64px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '16px', flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A0782A', flexShrink: 0 }} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '12px', color: '#aaaaaa', letterSpacing: '0.05em' }}>{msg}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button onClick={() => handleGo(url)} style={{
          background: 'none', border: '1px solid #A0782A', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
          color: '#A0782A', letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '6px 14px', borderRadius: 0, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#A0782A'; e.currentTarget.style.color = '#080808' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#A0782A' }}
        >{cta} →</button>
        <button onClick={handleClose} style={{
          background: 'none', border: '1px solid #333', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
          color: '#aaaaaa', letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '6px 14px', borderRadius: 0, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#aaaaaa'; e.currentTarget.style.color = '#ffffff' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#aaaaaa' }}
        >Stay in English ✕</button>
      </div>
    </div>
  )
}
