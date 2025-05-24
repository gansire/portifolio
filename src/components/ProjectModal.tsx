import React from 'react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, description, technologies, link }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-backdrop"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        variants={modal}
        onClick={e => e.stopPropagation()}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>Tecnologias:</h4>
        <ul>
          {technologies.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
        {link && <a href={link} target="_blank" rel="noreferrer">  Ver Projeto  </a>}
        <button onClick={onClose}>Fechar</button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;