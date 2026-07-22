const jobs = [
  {
    role: 'Desarrollador de software',
    company: 'Pice Software, S. A. de C. V.',
    period: 'Enero 2026 — Junio 2026',
    location: 'Guadalajara, Jalisco',
    bullets: [
      'Desarrollo de backend con Java 21 y Spring Boot para una plataforma IoT full-stack.',
      'Diseño de API REST, autenticación JWT, roles, resiliencia, caché y Virtual Threads.',
      'Frontend con React, Tailwind CSS, Chart.js y GSAP; despliegue con PM2 y servicios en AWS.',
      'Aplicación de Scrum, principios SOLID, Git, Jenkins, SonarQube, Swagger/OpenAPI y JMeter.',
      'Implementación de soporte de archivos mediante modelos de IA y arquitectura RAG.',
    ],
  },
  {
    role: 'Desarrollador de software',
    company: 'Pro-Piel Dermatología',
    period: 'Enero 2023 — Diciembre 2025',
    location: 'Zihuatanejo, Guerrero',
    bullets: [
      'Desarrollo de un sistema web clínico para pacientes, citas, expedientes, archivos y consentimientos.',
      'Creación de API REST y microservicios con Spring Boot, OpenFeign, Eureka Server, JWT y roles.',
      'Construcción del frontend con Angular, TypeScript y CSS.',
      'Optimización de Oracle y PL/SQL; persistencia con Hibernate/JPA y pruebas unitarias e integrales.',
      'Creación de pipelines en Jenkins, análisis de calidad con SonarQube y modelado UML/E-R.',
    ],
  },
  {
    role: 'Desarrollador de software — Prácticas profesionales',
    company: 'Boxha Café',
    period: 'Prácticas profesionales',
    location: 'Zihuatanejo, Guerrero',
    bullets: [
      'Desarrollo full-stack con PHP, MySQL, Bootstrap, JavaScript y CSS.',
      'Gestión de usuarios, roles, permisos, sesiones, contraseñas cifradas y validaciones.',
      'Optimización de consultas SQL, pruebas funcionales y refactorización de código.',
    ],
  },
  {
    role: 'Desarrollador de software — Prácticas escolares',
    company: 'Cross Army Fitness',
    period: 'Prácticas escolares',
    location: 'Zihuatanejo, Guerrero',
    bullets: [
      'Creación de interfaces responsivas y funciones dinámicas con PHP, CSS y JavaScript.',
      'Diseño de base de datos MySQL y desarrollo de registro e inicio de sesión.',
      'Colaboración en equipo con metodología Scrum e integración cliente-servidor.',
    ],
  },
]

function Experience() {
  return (
    <section className="card" id="experiencia">
      <div className="section-heading">
        <p className="section-kicker">Trayectoria</p>
        <h2>Experiencia profesional</h2>
      </div>

      <div className="timeline">
        {jobs.map((job) => (
          <article className="timeline-item" key={`${job.company}-${job.period}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="timeline-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
