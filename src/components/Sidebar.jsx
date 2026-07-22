import cv from '../assets/CV_Lexis_Uriel_Leyva_ES.pdf'

function Sidebar() {
  return (
    <aside className="sidebar" id="contacto">
      <section className="card side-section contact-card">
        <p className="section-kicker">Datos personales</p>
        <h2>Contacto</h2>

        <div className="contact-list">
          <div className="contact-item">
            <span>Correo</span>
            <a href="mailto:lexisurielleyva@gmail.com">lexisurielleyva@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>Teléfono</span>
            <a href="tel:+527555597415">+52 755 559 7415</a>
          </div>
          <div className="contact-item">
            <span>Ubicación</span>
            <p>Ecatepec de Morelos, Estado de México, C. P. 55390</p>
          </div>
          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/lexis-uriel-leyva-75836a292"
              target="_blank"
              rel="noopener noreferrer"
            >
              lexis-uriel-leyva
            </a>
          </div>
          <div className="contact-item">
            <span>GitHub</span>
            <a href="https://github.com/Lexisuriel" target="_blank" rel="noopener noreferrer">
              github.com/Lexisuriel
            </a>
          </div>
        </div>

        <a className="btn download-button" href={cv} download>
          Descargar CV en PDF
        </a>
      </section>

      <section className="card side-section">
        <p className="section-kicker">Competencias</p>
        <h2>Habilidades</h2>
        <ul className="compact-list">
          <li>Colaboración y trabajo en equipo</li>
          <li>Comunicación oral y escrita</li>
          <li>Adaptabilidad al cambio</li>
          <li>Priorización y gestión del tiempo</li>
          <li>Resolución de conflictos</li>
        </ul>
      </section>

      <section className="card side-section">
        <p className="section-kicker">Idiomas</p>
        <h2>Inglés</h2>
        <div className="language-level" aria-label="Nivel intermedio de inglés">
          <span className="level-dot active" />
          <span className="level-dot active" />
          <span className="level-dot active" />
          <span className="level-dot" />
          <span className="level-dot" />
        </div>
        <p className="muted">Nivel intermedio</p>
      </section>

      <section className="card side-section">
        <p className="section-kicker">Metodologías</p>
        <h2>Forma de trabajo</h2>
        <div className="sidebar-tags">
          <span>Scrum</span>
          <span>SOLID</span>
          <span>MVC</span>
          <span>DTO</span>
          <span>Builder</span>
          <span>Clean Code</span>
          <span>CI/CD</span>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar
