import cv from '../assets/CV_Lexis_Uriel_Leyva_.pdf';

function Sidebar() {
  return (
    <aside>
      <div className="card side-section contact" id="contact">
        <h4>Contacto & Redes</h4>
        <a href="mailto:lexisurielleyva@gmail.com">lexisurielleyva@gmail.com</a>
        <a href="https://www.linkedin.com/in/lexis-uriel-leyva-75836a292" target="_blank" rel="noopener noreferrer">
          LinkedIn /lexis-uriel-leyva
        </a>
        <a href="https://github.com/Lexisuriel">GitHub /lexis</a>

        <hr style={{border: 'none', borderTop: '1px solid rgba(255,255,255,0.03)', margin: '12px 0'}} />

        <h4>Stack & Tools</h4>
        <div style={{color: 'var(--muted)', lineHeight: '1.7'}}>
          PHP · JavaScript · MariaDB · HTML · CSS · Git · Arduino · VSCode
        </div>

        <h4 style={{marginTop: '14px'}}>Intereses</h4>
        <div style={{color: 'var(--muted)', lineHeight: '1.7'}}>
          Desarrollo backend, Desarrollo Frontend, PWA, bases de datos, robótica básica.
        </div>
      </div>

      <div className="card" style={{marginTop: '18px'}}>
        <h4>Descargar CV</h4>
      <a
  className="btn"
  href={cv}
  target="_blank"
  rel="noopener noreferrer"
  download
>
  Descargar PDF
</a>

        <div style={{color: 'var(--muted)', fontSize: '13px', marginTop: '8px'}}>
          
        </div>
      </div>
    </aside>
  )
}

export default Sidebar