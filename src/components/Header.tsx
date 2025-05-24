import React from 'react';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <strong>Jean Carlos Lima da Silva</strong>
        <div>
          <a href="#home" onClick={() => scrollTo('home')}>Início</a>
          <a href="#about" onClick={() => scrollTo('about')}>Sobre</a>
          <a href="#projects" onClick={() => scrollTo('projects')}>Projetos</a>
          <a href="#contact" onClick={() => scrollTo('contact')}>Contato</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;