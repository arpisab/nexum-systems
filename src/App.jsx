import { useMemo } from 'react'

const capabilities = [
  {
    title: 'Digital Architecture',
    text: 'Web platforms, service websites, content structures and scalable digital frameworks designed for clarity and long-term use.',
  },
  {
    title: 'Operational Systems',
    text: 'Process mapping, structured workflows, information environments and operational logic for organizations working across borders.',
  },
  {
    title: 'Interface & Experience',
    text: 'User-focused dashboards, enterprise UX and clear interaction layers that make complex systems easier to understand and use.',
  },
]

const intelligent = [
  'Automated workflows',
  'Structured data environments',
  'Smart reporting layers',
  'Assistive interfaces',
]

const approach = [
  {
    title: 'Structured',
    text: 'No noise, no ornamental complexity. Every page and system component is built with purpose.',
  },
  {
    title: 'Scalable',
    text: 'Designed to evolve from a lean first release into a broader operational platform.',
  },
  {
    title: 'Precise',
    text: 'Clear information hierarchies and disciplined execution aligned with international business needs.',
  },
]

function App() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Nexum Systems home">
            <span className="brand-mark">N</span>
            <span className="brand-text">
              <strong>NEXUM</strong>
              <span>SYSTEMS</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#systems">Systems</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">Contact</a>
            <a href="?lang=it" className="btn-secondary">IT</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Digital Infrastructure for Global Business</p>
              <h1>
                We design systems that connect digital, operational and
                organizational layers.
              </h1>
              <p className="hero-text">
                Nexum Systems supports companies working across countries with a
                structured digital layer: websites, interfaces, workflows and
                intelligent environments built for clarity, precision and scale.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Start a Project
                </a>
                <a className="button button-secondary" href="#about">
                  Discover the Model
                </a>
              </div>
            </div>

            <div className="hero-panel" aria-hidden="true">
              <div className="panel-card panel-card-main">
                <span className="panel-label">Core Model</span>
                <h2>Infrastructure, not marketing.</h2>
                <p>
                  A surface-level independent brand layer with the discipline of
                  a deeper operational backbone.
                </p>
              </div>
              <div className="panel-grid">
                <div className="panel-card small">
                  <span className="panel-label">Layer 01</span>
                  <p>Digital presence</p>
                </div>
                <div className="panel-card small">
                  <span className="panel-label">Layer 02</span>
                  <p>Operational logic</p>
                </div>
                <div className="panel-card small">
                  <span className="panel-label">Layer 03</span>
                  <p>Intelligent systems</p>
                </div>
                <div className="panel-card small">
                  <span className="panel-label">Layer 04</span>
                  <p>Global integration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container metrics-grid">
            <div>
              <span className="metric-value">01</span>
              <p>Independent-facing brand layer</p>
            </div>
            <div>
              <span className="metric-value">02</span>
              <p>Legally and fiscally linked operational model</p>
            </div>
            <div>
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
              {capabilities.map((item) => (
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
              <h2>Soft AI integration, framed as operational evolution.</h2>
              <p>
                Nexum Systems introduces automation, structured data and adaptive
                interfaces as a practical extension of business infrastructure —
                not as hype, but as a tool for better clarity and efficiency.
              </p>
            </div>
            <div className="list-panel">
              <ul>
                {intelligent.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">Global Integration</p>
              <h2>Built to sit on top of a broader operational ecosystem.</h2>
            </div>
            <div>
              <p>
                Nexum Systems appears as a focused and contemporary digital
                entity, while remaining connected to a deeper infrastructure for
                international operations, organizational processes and long-term
                business support.
              </p>
              <p>
                This model keeps the offer agile in the market and solid in its
                structure.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>We don’t build websites. We build systems.</h2>
            </div>
            <div>
              <p>
                Nexum Systems is a digital infrastructure initiative created for
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

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Approach</p>
              <h2>Three principles define the brand.</h2>
            </div>
            <div className="card-grid">
              {approach.map((item) => (
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
          <p>Digital Infrastructure for Global Business</p>
        </div>
      </footer>
    </div>
  )
}

export default App
