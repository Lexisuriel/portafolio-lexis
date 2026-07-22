const projects = [
  {
    id: 'pice-iot',
    initials: 'IoT',
    title: 'Plataforma IoT full-stack',
    organization: 'Pice Software, S. A. de C. V.',
    description:
      'Plataforma que conecta dispositivos ESP8266 con una aplicación web multiusuario. Incluye más de 35 endpoints REST, autenticación JWT y roles, asistentes virtuales personalizables, datos en tiempo real y cuatro paneles especializados.',
    highlights: [
      'Integración con Google Calendar mediante OAuth 2.0 y OpenWeatherMap.',
      'AWS Aurora con MySQL, React, Tailwind CSS, Chart.js y GSAP.',
      'Documentación OpenAPI/Swagger, pruebas con JMeter y pipelines en Jenkins.',
    ],
    tags: ['Java 21', 'Spring Boot', 'React', 'AWS Aurora', 'JWT', 'IoT'],
  },
  {
    id: 'propiel',
    initials: 'PP',
    title: 'Sistema web para clínica dermatológica',
    organization: 'Pro-Piel Dermatología',
    description:
      'Sistema integral para administrar pacientes, citas, consentimientos y expedientes médicos, con control por roles, manejo de archivos e imágenes, metadatos EXIF, generación de PDF y paneles dinámicos.',
    highlights: [
      'API REST con Spring Boot, OpenFeign, Eureka Server y seguridad JWT.',
      'Frontend responsivo con Angular y TypeScript.',
      'Oracle y PL/SQL con procedimientos, triggers y cursores; persistencia con Hibernate/JPA.',
    ],
    tags: ['Java 8', 'Spring Boot', 'Angular', 'Oracle', 'PL/SQL', 'Microservicios'],
  },
  {
    id: 'boxha',
    initials: 'BC',
    title: 'Plataforma web de gestión para cafetería',
    organization: 'Boxha Café',
    description:
      'Aplicación web orientada a la administración de usuarios, roles y permisos, con autenticación segura, validaciones, cifrado de contraseñas y módulos para clientes y administradores.',
    highlights: [
      'Interfaz responsiva con Bootstrap, JavaScript y CSS.',
      'Optimización de consultas SQL y tiempos de carga.',
      'Pruebas funcionales, seguridad web y refactorización con principios de código limpio.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Seguridad web'],
  },
  {
    id: 'cross-army',
    initials: 'CA',
    title: 'Sistema web para gimnasio',
    organization: 'Cross Army Fitness',
    description:
      'Proyecto de desarrollo web frontend y backend con interfaces responsivas, funciones dinámicas, registro e inicio de sesión, integración cliente-servidor y diseño de base de datos.',
    highlights: [
      'Desarrollo con PHP, CSS, JavaScript y MySQL.',
      'Diseño de flujos de autenticación y persistencia de datos.',
      'Trabajo colaborativo aplicando metodología Scrum.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'Scrum'],
  },
]

function Projects() {
  return (
    <section className="card" id="proyectos">
      <div className="section-heading">
        <p className="section-kicker">Casos de trabajo</p>
        <h2>Proyectos destacados</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className="project">
            <div className="proj-thumb" aria-hidden="true">{project.initials}</div>
            <div className="proj-info">
              <p className="project-organization">{project.organization}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
