import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        if (!formData.name) newErrors.name = 'Nome é obrigatório';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
        if (!formData.message) newErrors.message = 'Mensagem é obrigatória';
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        // Simula envio
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2>Contato</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>Nome</label>
                    <input name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Mensagem</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit">Enviar</button>
                <a
                    href={`https://wa.me/5519988532448?text=${encodeURIComponent('Olá Jean! Vi seu portfólio e gostaria de conversar.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-button"
                >
                    Enviar mensagem no WhatsApp
                </a>
                {submitted && <p className="success">Mensagem enviada com sucesso!</p>}
            </form>
        </motion.section>
    );
};

export default Contact;