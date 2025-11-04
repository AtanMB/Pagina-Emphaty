"use client";
import React from 'react';

// Componente de video con estilo Emphaty
function YouTubeVideo({ videoId, title }) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  
  const styles = {
    card: {
      backgroundColor: '#FAFAF5',
      borderTop: '5px solid rgb(103, 134, 89)',
      borderRadius: '1rem',
      boxShadow: '0 6px 14px rgba(0,0,0,0.1)',
      padding: '1rem',
      transition: 'all 0.3s ease',
      cursor: 'default',
    },
    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
    },
    videoContainer: {
      position: 'relative',
      paddingBottom: '56.25%', // Proporción 16:9
      height: 0,
      overflow: 'hidden',
      borderRadius: '0.75rem',
      marginBottom: '1rem',
      background: '#000',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: '1.1rem',
      color: 'rgb(103, 134, 89)',
      fontWeight: '600',
      textAlign: 'center',
      marginTop: '0.5rem',
    },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{ ...styles.card, ...(hover ? styles.cardHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={styles.videoContainer}>
        <iframe
          style={styles.iframe}
          src={videoSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
}

// Lista de videos
const videos = [
  { id: 'CsyCsBo12co', title: 'Qué es la Ansiedad y Cómo Manejarla' },
  { id: 'Z6H0SrAw4oY', title: 'Técnicas de Respiración para la Calma' },
  { id: 'IShkpOm63gg', title: 'Mindfulness para Principiantes' },
  { id: 'xuU_cCFOFA0', title: 'REGULAR tus EMOCIONES' },
];

export default function RecursosPage() {
  const styles = {
    container: {
      maxWidth: '960px',
      margin: '2rem auto',
      padding: '0 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '800',
      color: 'rgb(103, 134, 89)',
      textAlign: 'center',
      marginBottom: '2rem',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Recursos de Bienestar</h1>
      <div style={styles.grid}>
        {videos.map((video) => (
          <YouTubeVideo key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );
}
