import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
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
                    <button onClick={toggleTheme} style={{
                        marginLeft: '1rem',
                        background: 'none',
                        border: '1px solid #ccc',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: theme === 'light' ? '#000' : '#fff'
                    }}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;