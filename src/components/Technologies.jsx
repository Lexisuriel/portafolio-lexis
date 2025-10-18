import './Technologies.css'

function Technologies() {
  const technologies = [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'py' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Arduino', icon: 'arduino' },
    { name: 'Android Studio', icon: 'androidstudio' },
    { name: 'Linux', icon: 'linux' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Figma', icon: 'figma' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'GSAP', icon: 'gsap', custom: true }
  ]

  return (
    <div className="card technologies-section" id="tecnologias">
      <h2 style={{ marginTop: '0', textAlign: 'center', marginBottom: '24px' }}>
        Tecnologías & Herramientas
      </h2>
      
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            {tech.custom ? (
              <div className="tech-icon custom-icon">
                <span>GSAP</span>
              </div>
            ) : (
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                className="tech-icon"
                loading="lazy"
              />
            )}
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies