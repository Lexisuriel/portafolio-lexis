import './Technologies.css'

const technologyGroups = [
  {
    title: 'Backend y arquitectura',
    items: ['Java 21 / 17 / 8', 'Spring', 'Spring Boot', 'API REST', 'Microservicios', 'Hibernate', 'JPA', 'JWT', 'OpenFeign', 'Eureka Server'],
  },
  {
    title: 'Frontend y web',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Next.js', 'Node.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'GSAP'],
  },
  {
    title: 'Bases de datos',
    items: ['Oracle 19c', 'PL/SQL', 'MySQL', 'AWS Aurora', 'AWS RDS', 'MongoDB', 'MariaDB', 'H2'],
  },
  {
    title: 'Cloud, DevOps y calidad',
    items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'SonarQube', 'Git', 'GitHub', 'PM2', 'JUnit', 'JMeter'],
  },
  {
    title: 'Documentación y herramientas',
    items: ['OpenAPI', 'Swagger', 'Postman', 'SoapUI', 'Jira', 'DBeaver', 'SQL Developer', 'Spring Tool Suite', 'Eclipse', 'VS Code'],
  },
  {
    title: 'Otros conocimientos',
    items: ['C++', 'PHP', 'SOAP', 'XML', 'JSON', 'Android Studio', 'Apache Tomcat', 'GlassFish', 'Windows', 'Linux'],
  },
]

function Technologies() {
  return (
    <section className="card technologies-section" id="tecnologias">
      <div className="section-heading">
        <p className="section-kicker">Stack técnico</p>
        <h2>Tecnologías y herramientas</h2>
      </div>

      <div className="technology-groups">
        {technologyGroups.map((group) => (
          <article className="technology-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="technology-list">
              {group.items.map((item) => (
                <span className="technology-pill" key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Technologies
