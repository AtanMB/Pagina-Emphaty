import React from 'react';

// Estilos simples en línea para empezar
const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '0.5rem',
  },
  paragraph: {
    lineHeight: '1.6',
    color: '#555',
  },
};

export default function SobreNosotrosPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sobre Nosotros</h1>
      <p style={styles.paragraph}>
        Bienvenido a Emphaty, tu espacio seguro para el bienestar emocional.
      </p>
      <p style={styles.paragraph}>
        Nuestra misión es proporcionar herramientas y recursos accesibles para
        ayudar a las personas a navegar los desafíos de la salud mental.
        Creemos en el poder de la empatía y la conexión para sanar.
      </p>
      <p style={styles.paragraph}>
        Nuestro equipo está compuesto por profesionales dedicados, listos para
        apoyarte en tu viaje hacia una vida más plena y equilibrada.
      </p>
    </div>
  );
}