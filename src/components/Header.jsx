import avatar from '../assets/avatar.jpg'
import cv from '../assets/CV_Lexis_Uriel_Leyva_ES.pdf'

function Header() {
  return (
    <header className="hero" id="inicio">
      <nav className="top-nav" aria-label="Navegación principal">
        <a className="brand" href="#inicio">LY</a>
        <div className="nav-links">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#educacion">Educación</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="avatar" aria-hidden="true">
          <img src={avatar} alt="" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Desarrollador de Software</p>
          <h1>Lexis Uriel Leyva Fernandez</h1>
          <p className="hero-summary">
            Desarrollador full-stack con 3 años y 6 meses de experiencia en Java,
            Spring Boot, API REST, microservicios, React, Angular, bases de datos,
            nube y automatización de despliegues.
          </p>

          <div className="hero-tags" aria-label="Especialidades principales">
            <span>Java & Spring Boot</span>
            <span>React & Angular</span>
            <span>API REST & Microservicios</span>
            <span>AWS & DevOps</span>
          </div>

          <div className="cta">
            <a className="btn" href="mailto:lexisurielleyva@gmail.com">Contactar</a>
            <a className="btn secondary" href="#proyectos">Ver proyectos</a>
            <a className="btn ghost" href={cv} target="_blank" rel="noopener noreferrer">
              Ver CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
