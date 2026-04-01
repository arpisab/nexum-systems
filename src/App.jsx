import { useMemo } from 'react'
import { content } from './content'

function App() {
  const year = useMemo(() => new Date().getFullYear(), [])
  const params = new URLSearchParams(window.location.search)
  const lang = params.get('lang') === 'it' ? 'it' : 'en'
  const t = content[lang]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">N</span>
            <span className="brand-text">
              <strong>NEXUM</strong>
              <span>SYSTEMS</span>
            </span>
          </a>

          <nav className="site-nav">
            <a href="#services">{t.nav.services}</a>
            <a href="#systems">{t.nav.systems}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact" className="nav-cta">{t.nav.contact}</a>
            <a href={lang === 'it' ? '?' : '?lang=it'} className="lang-switch">
              {lang === 'it' ? 'EN' : 'IT'}
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Digital Infrastructure for Global Business</p>
              <h1>{t.hero.title}</h1>
              <p className="hero-text">{t.hero.text}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  {t.hero.ctaPrimary}
                </a>
                <a className="button button-secondary" href="#about">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-hidden="true">
              <div className="panel-card panel-card-main">
                <span className="panel-label">Core Model</span>
                <h2>Infrastructure, not marketing.</h2>
                <p>
                  A focused, contemporary digital layer built to sit on top of a
                  deeper operational backbone.
                </p>
              </div>

              <div className="panel-grid">
                <div className="panel-card small">
                  <span className="panel-label">Layer 01</span>
                  <p>Digital presence</p>
                </div>
                <div className="panel-card small">
                  <span className="panel-label">Layer 02</span>
                  <p>Operational systems</p>
                </div>
                <div className="panel-card small">
                  <span className="panel-label">Layer 03</span>
                  <p>Intelligent interfaces</p>
                </div>
                <div className="panel-card small">
                  <span className="panel-label">Layer 04</span>
                  <p>Global integration</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container metrics-grid">
            <div className="metric-card">
              <span className="metric-value">01</span>
              <p>Independent-facing brand layer</p>
            </div>
            <div className="metric-card">
              <span className="metric-value">02</span>
              <p>Legally and fiscally linked operational model</p>
            </div>
            <div className="metric-card">
              <span className="metric-value">03</span>
              <p>Scalable from website to systems and AI-assisted interfaces</p>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Core Capabilities</p>
              <h2>Three service pillars built for international complexity.</h2>
            </div>

            <div className="card-grid">
              {t.capabilities.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="section section-alt">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">Intelligent Systems</p>
              <h2>{t.intelligent.title}</h2>
              <p>{t.intelligent.text}</p>
            </div>

            <div className="list-panel">
              <ul>
                {t.intelligent.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>We don’t build websites. We build systems.</h2>
            </div>
            <div>
              <p>
                Nexum Systems is a digital infrastructure initiative designed for
                companies that need more than communication: they need structure,
                clarity and a digital layer capable of supporting growth.
              </p>
              <p>
                The model is designed to evolve from a lean first release into a
                wider platform including websites, dashboards, internal tools,
                content systems and intelligent operational interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Approach</p>
              <h2>Three principles define the brand.</h2>
            </div>

            <div className="card-grid">
              {t.approach.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="container contact-box">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Present the proposal. Open the conversation.</h2>
              <p>
                This first version is intentionally lean: a board-ready narrative,
                a deployable site structure and a scalable foundation for the next
                stage of development.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="mailto:hello@nexumsystems.com">
                hello@nexumsystems.com
              </a>
              <a className="button button-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub Workflow
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} Nexum Systems</p>
          <p>{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  )
}

export default App