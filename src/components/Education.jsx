function Education() {
  return (
    <div className="card" style={{ marginTop: '18px' }} id="experiencia">
      <h2 style={{ marginTop: '0' }}>Educación & Experiencia</h2>

      <p style={{ color: 'var(--muted)' }}>
        <strong>Universidad Tecnológica de la Costa Grande de Guerrero</strong> — 
        Técnico Superior Universitario<br />
        Cursos relevantes: Desarrollo web, Bases de datos, Laboratorio de Robótica.
      </p>

      <h3 style={{ marginTop: '12px' }}>Certificaciones </h3>
      <ul style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
        <li>
          <a 
            href="https://credsverse.com/credentials/d9fcdb45-18fb-4f29-a560-02ffacfce151" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--link-color)', textDecoration: 'none', fontWeight: 'bold' }}
          >
            HACKERMENTOR CIBERSEGURIDAD S.A.S. Academia de Ciberseguridad

          </a>
        </li>
      </ul>
    </div>
  );
}

export default Education;
