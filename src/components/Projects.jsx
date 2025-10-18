function Projects() {
  const projects = [
    {
      id: 1,
      initials: 'BF',
      title: 'Boxha Café — Plataforma de pedidos',
      description: 'Desarrollo backend y diseño de base de datos con MariaDB. Módulos para cliente y administrador, autenticación y gestión de productos.',
      tags: ['PHP', 'MariaDB', 'JavaScript']
    },
    {
      id: 2,
      initials: 'P1',
      title: 'Aplicación PWA — Demo',
      description: 'Implementación de service worker, cache inteligente y modo offline para una experiencia web progresiva.',
      tags: ['PWA', 'Service Worker']
    },
    {
      id: 3,
      initials: 'HW',
      title: 'Mini Sumo — Robot Autónomo',
      description: 'Control con Arduino Nano, control de motores L293D y sensores de distancia. Código y diagrama de pines incluidos.',
      tags: ['Arduino', 'Robótica']
    },
    {
      id: 4,
      initials: 'BD',
      title: 'Renombrador PDF — App de escritorio',
      description: 'Aplicación moderna en Python (Tkinter) para renombrar archivos PDF basados en datos de Excel, con una interfaz limpia y profesional.',
      tags: ['Python', 'Tkinter', 'Excel']
    },
    {
      id: 5,
      initials: 'BT',
      title: 'Conexión Bluetooth — Comunicación móvil',
      description: 'Desarrollo en Ionic React con Capacitor para comunicación entre dispositivos mediante Bluetooth clásico (HC-06).',
      tags: ['Ionic', 'React', 'Bluetooth']
    },
    {
      id: 6,
      initials: 'DS',
      title: 'Dashboard Dinámico — Control de archivos',
      description: 'Panel web con roles de usuario y administrador, subida de imágenes y generación automática de pantallas con carruseles.',
      tags: ['React', 'Node.js', 'MySQL']
    },
    {
      id: 7,
      initials: 'SR',
      title: 'Sistema de Reconocimiento — Seguridad',
      description: 'Prototipo de control de acceso con reconocimiento facial usando OpenCV y base de datos local para almacenamiento.',
      tags: ['Python', 'OpenCV', 'Seguridad']
    },
    {
      id: 8,
      initials: 'LP',
      title: 'Landing Page — Proyecto especial',
      description: 'Sitio interactivo creado con React, Vite y GSAP. Incluye animaciones, imágenes y videos personalizados con un mensaje especial.',
      tags: ['React', 'GSAP', 'Bootstrap']
    },
    {
      id: 9,
      initials: 'MS',
      title: 'Monitor de Sensores IoT — ESP32',
      description: 'Sistema para lectura de sensores de temperatura y humedad, con envío de datos a una API y visualización en tiempo real.',
      tags: ['ESP32', 'IoT', 'API']
    },
    {
      id: 10,
      initials: 'SC',
      title: 'Simulador de Ciberataques — Educativo',
      description: 'Entorno controlado para prácticas de ciberseguridad, simulando ataques comunes y aplicando medidas defensivas.',
      tags: ['Ciberseguridad', 'Linux', 'Networking']
    }
  ]

  return (
    <div className="card" style={{marginTop: '18px'}} id="proyectos">
      <h2 style={{marginTop: '0'}}>Proyectos</h2>
      
      {projects.map(project => (
        <article key={project.id} className="project">
          <div className="proj-thumb">{project.initials}</div>
          <div className="proj-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Projects
