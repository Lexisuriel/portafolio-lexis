function About() {
  const skills = ['PHP', 'JavaScript', 'MariaDB / SQL', 'PWA / Service Workers', 'HTML & CSS', 'Git', 'Node.js'];
  
  return (
    <div className="card about">
      <h2 style={{marginTop: '0'}}>Acerca de mí</h2>
      <p>
        Soy estudiante de la Universidad Tecnológica de la Costa Grande de Guerrero, 
        apasionado por el desarrollo de software y la creación de soluciones prácticas. 
        He trabajado en el proyecto <strong>Boxha Café</strong>, desarrollando el backend 
        y las interfaces para cliente y administrador usando PHP, JavaScript y MariaDB. 
        Me gusta crear aplicaciones accesibles, optimizadas y fáciles de mantener.
      </p>

      <div style={{display: 'flex', gap: '18px', marginTop: '16px', alignItems: 'center'}}>
        <div>
          <div style={{fontSize: '12px', color: 'var(--muted)'}}>Ubicación</div>
          <div>Zihuatanejo, Guerrero, México</div>
        </div>
        <div>
          <div style={{fontSize: '12px', color: 'var(--muted)'}}>Contacto</div>
          <div style={{color: 'var(--muted)'}}>lexisurielleyva@gmail.com</div>
        </div>
      </div>

      <h3 style={{marginTop: '18px'}}>Habilidades destacadas</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default About