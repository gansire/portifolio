import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => (
  <motion.section
    id="home"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h1>Olá, sou Jean Carlos Lima da Silva</h1>
    <p>Desenvolvedor Full Stack com mais de dois anos de experiência em tecnologias como React, Node.js e TypeScript.</p>
    <p>Foco em aplicações escaláveis, eficientes e com boa usabilidade.</p>
  </motion.section>
);

export default Home;