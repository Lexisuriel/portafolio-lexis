function About() {
  const strengths = [
    'Trabajo en equipo',
    'Comunicación asertiva',
    'Adaptabilidad',
    'Gestión del tiempo',
    'Resolución de problemas',
    'Código limpio',
  ]

  return (
    <section className="card about" id="perfil">
      <div className="section-heading">
        <p className="section-kicker">Perfil</p>
        <h2>Acerca de mí</h2>
      </div>

      <p>
        Apasionado por el desarrollo de software y la creación de soluciones prácticas.
        He participado en proyectos de backend, frontend e interfaces para clientes y
        administradores utilizando Java, Spring Framework, Spring Boot, API REST,
        microservicios, Hibernate, JPA, React, Angular, TypeScript, PHP y JavaScript.
      </p>
      <p>
        También cuento con experiencia en Docker, Kubernetes, AWS, Oracle, MongoDB,
        MySQL, MariaDB, JWT, Git, JUnit, Jenkins, SonarQube, Swagger y JMeter. Mi objetivo
        es construir aplicaciones accesibles, optimizadas, escalables y fáciles de mantener,
        mientras continúo aprendiendo y compartiendo conocimientos con la comunidad.
      </p>

      <div className="stats-grid" aria-label="Logros profesionales">
        <div className="stat">
          <strong>Experiencia</strong>
          <strong>3 años y 6 meses</strong>
        </div>
        <div className="stat">
          <strong>Frontend</strong>
          <strong>React y Angular</strong>
        </div>
        <div className="stat">
          <strong>Backend</strong>
          <strong>Java, Spring Boot, API REST, Microservicios</strong>
        </div>
      </div>

      <h3>Fortalezas profesionales</h3>
      <div className="skills">
        {strengths.map((strength) => (
          <span key={strength} className="skill">{strength}</span>
        ))}
      </div>
    </section>
  )
}

export default About
