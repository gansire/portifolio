import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => (
    <motion.section
        id="about"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <h2>Sobre mim</h2>
        <p>Atuei por dois anos na Texxia como desenvolvedor PJ e CLT, com foco em aplicações web utilizando React, Node.js, TypeScript e MongoDB.</p>
        <p>Tenho experiência sólida em front-end (HTML, SCSS) e também em back-end com Express, MySQL e Docker.</p>
        <p>Trabalho com metodologias ágeis como Scrum e estou sempre buscando aprendizado contínuo.</p>

        <a
            href="/Curriculo_JeanCarlos.pdf"
            download
            className="download-button"
        >
            📄 Baixar Currículo
        </a>
    </motion.section>
);

export default About;