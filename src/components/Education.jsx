const courses = [
  'Curso gamificado de hacking ético HACKLAB.',
  'Despliegue de API REST en AWS y AWS RDS con MySQL.',
  'Java 21, 17 y 8; programación orientada a objetos.',
  'Angular y desarrollo de aplicaciones web frontend.',
  'Spring Boot, API REST y microservicios.',
  'Oracle Database 19c y bloques anónimos PL/SQL.',
  'MongoDB y documentos JSON.',
  'Versionamiento de código con Git.',
  'Scrum y sus ceremonias.',
  'Patrones de diseño y arquitecturas web.',
  'Docker: contenedores, imágenes y despliegue.',
  'Kubernetes: servicios, deployments y pods.',
]

function Education() {
  return (
    <section className="card" id="educacion">
      <div className="section-heading">
        <p className="section-kicker">Formación</p>
        <h2>Educación y cursos</h2>
      </div>

      <article className="education-record">
        <div>
          <h3>Ingeniería en Tecnologías de la Información</h3>
          <p className="company">Universidad Tecnológica de la Costa Grande de Guerrero</p>
          <p className="muted">Titulado</p>
        </div>
        <div className="education-meta">
          <span>Septiembre 2022</span>
          <span>Petatlán, Guerrero</span>
        </div>
      </article>

      <h3 className="courses-title">Cursos y formación complementaria</h3>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course" key={course}>{course}</div>
        ))}
      </div>

      <div className="credential-link">
        <span>Credencial de ciberseguridad:</span>
        <a
          href="https://credsverse.com/credentials/d9fcdb45-18fb-4f29-a560-02ffacfce151"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackerMentor Ciberseguridad S.A.S.
        </a>
      </div>
    </section>
  )
}

export default Education
