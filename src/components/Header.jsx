import avatar from '../assets/avatar.jpg';

function Header() {
  return (
    <header className="header">
      <div className="avatar">
        <img 
          src={avatar} 
          alt="Lexis Uriel" 
        />
      </div>
      <div className="title">
        <h1>
          Lexis Uriel Leyva 
          <span style={{fontWeight: '500', color: 'var(--muted)', fontSize: '14px'}}>
            · Técnico Superior Universitario
          </span>
        </h1>
        <div className="subtitle">
          Desarrollador backend y Frontend en formación · PHP · JavaScript · MariaDB · React · Python · nextjs · Tailwind CSS · GSAP
        </div>
        <div className="cta">
          <a className="btn" href="#contact">Contactar</a>
          <a className="btn secondary" href="#proyectos">Ver proyectos</a>
        </div>
      </div>
    </header>
  )
}

export default Header