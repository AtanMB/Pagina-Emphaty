import React from 'react';

// Un componente simple para mostrar un video de YouTube
// Puedes mover esto a tu carpeta /components si quieres reutilizarlo
function YouTubeVideo({ videoId, title }) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  
  const styles = {
    videoContainer: {
      position: 'relative',
      paddingBottom: '56.25%', // Proporción 16:9
      height: '0',
      overflow: 'hidden',
      maxWidth: '100%',
      background: '#000',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    iframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: '1.25rem',
      color: '#333',
      marginTop: '0.5rem',
    }
  };

  return (
    <div>
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
      maxWidth: '900px',
      margin: '2rem auto',
      padding: '0 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ marginBottom: '2rem' }}>Recursos de Bienestar</h1>
      <div style={styles.grid}>
        {videos.map((video) => (
          <YouTubeVideo key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );
}