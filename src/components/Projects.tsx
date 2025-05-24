import React, {useState} from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Chatbot para WhatsApp',
      description: 'Sistema de chatbot com interface web integrado ao WhatsApp para atendimento automatizado.',
      technologies: ["ReactJs", "Nodejs", "Express", "MongoDB", "Docker", "AWS"],
      link: '#',
    }
  ];
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Projetos</h2>
      {projects.map((p, i) => (
        <motion.div
          className="project"
          key={i}
          whileHover={{ scale: 1.03 }}
          onClick={() => setSelected(i)}
        >
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          {
            p.link == "#"?
            ""
            :
            <a href={p.link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
          }
        </motion.div>
      ))}
      {selected !== null && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelected(null)}
          title={projects[selected].title}
          description={projects[selected].description}
          technologies={projects[selected].technologies}
          link={projects[selected].link}
        />
      )}
    </motion.section>
  );
};

export default Projects;