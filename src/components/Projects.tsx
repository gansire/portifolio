const projects = [
  {
    title: 'Chatbot para WhatsApp',
    description: 'Desenvolvimento de um sistema de chatbot integrado com WhatsApp Business API, permitindo comunicação automatizada e atendimento eficiente.',
    link: '#',
  }
];

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      {projects.map((proj, idx) => (
        <div key={idx} className="project">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          {
            proj.link == "#"?
            ""
            :
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
          }
          
        </div>
      ))}
    </section>
  );
};