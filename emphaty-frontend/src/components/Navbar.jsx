"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// Asegúrate de que las rutas a lib/auth.js sean correctas según tu estructura
import { getUserFromToken, logout } from "@/lib/auth"; 

// 1. Define estilos como objetos JavaScript
const styles = {
    navbar: {
        backgroundColor: '#1E40AF', // Azul Oscuro (similar a blue-800)
        color: 'white',
        padding: '1rem 2rem', // padding: p-4 md:px-8
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    navGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem', // gap-4
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem', // text-xl
        textDecoration: 'none',
        color: 'white'
    },
    link: {
        color: 'rgba(255, 255, 255, 0.9)',
        textDecoration: 'none',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        fontSize: '0.875rem', // text-sm
        transition: 'background-color 0.2s, color 0.2s',
        whiteSpace: 'nowrap'
    },
    // Estilos de hover (deben manejarse con un estado o con CSS Modules/globals.css para ser efectivos)
    // Para simplificar, no aplicamos el hover en línea.
    authButton: {
        padding: '0.5rem 1rem',
        borderRadius: '9999px', // rounded-full
        fontWeight: '500',
        cursor: 'pointer',
        border: 'none',
        fontSize: '0.875rem'
    },
    loginButton: {
        backgroundColor: 'white',
        color: '#1E40AF',
    },
    registerButton: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        color: 'white',
    },
    logoutButton: {
        backgroundColor: '#DC2626', // bg-red-600
        color: 'white',
    },
    psicologoLink: {
        color: '#FDE047', // text-yellow-300
        fontWeight: 'bold'
    },
    userInfo: {
        fontSize: '0.875rem',
        marginRight: '0.5rem'
    }
};


export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromToken());
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  // Función para manejar el estilo de los enlaces dinámicamente
  const getLinkStyle = (isPsicologoLink = false) => ({
      ...styles.link,
      ...(isPsicologoLink ? styles.psicologoLink : {})
  });

  return (
    // 2. Aplica los estilos usando el atributo 'style'
    <nav style={styles.navbar}>
      <div style={styles.navGroup}>
        <Link href="/" style={styles.logo}>
          Emphaty
        </Link>
        
        {/* ENLACES PRINCIPALES */}
        <Link href="/testimonios" style={styles.link}>Testimonios</Link>
        <Link href="/recursos" style={styles.link}>Recursos</Link>
        <Link href="/sobre-nosotros" style={styles.link}>Sobre Nosotros</Link>
        <Link href="/chatbot" style={styles.link}>Asistente</Link>

        {/* ENLACES CONDICIONALES */}
        {user?.rol === "Psicologo" && 
          <Link href="/testimonios/pendientes" style={getLinkStyle(true)}>
            Pendientes
          </Link>
        }
        {user && 
          <Link 
            href="/testimonios/nuevo" 
            style={{...styles.authButton, backgroundColor: '#2563EB', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem'}}
          >
            Publicar
          </Link>
        }
      </div>

      <div style={styles.navGroup}>
        {!user ? (
          <>
            <Link href="/login" style={{...styles.authButton, ...styles.loginButton}}>
              Iniciar Sesión
            </Link>
            <Link href="/register" style={{...styles.authButton, ...styles.registerButton}}>
              Registrarse
            </Link>
          </>
        ) : (
          <>
            <span style={styles.userInfo}>{user.nombre} ({user.rol})</span>
            <button 
              onClick={handleLogout} 
              style={{...styles.authButton, ...styles.logoutButton}}
            >
              Salir
            </button>
          </>
        )}
      </div>
    </nav>
  );
}