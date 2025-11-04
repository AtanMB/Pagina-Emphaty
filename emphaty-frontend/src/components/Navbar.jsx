"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserFromToken, logout } from "@/lib/auth";

// 🎨 Paleta basada en rgb(103, 134, 89)
const styles = {
  navbar: {
    backgroundColor: "rgb(103, 134, 89)",
    color: "#FAFAF5",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
  },
  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#FAFAF5",
    fontWeight: "bold",
    fontSize: "1.7rem", // 🔹 Más grande
  },
  link: {
    color: "#F5F2E7",
    textDecoration: "none",
    padding: "0.4rem 0.8rem",
    borderRadius: "0.5rem",
    fontSize: "1.1rem", // 🔹 Aumentado
    transition: "background-color 0.3s, color 0.3s, transform 0.2s",
  },
  authButton: {
    padding: "0.6rem 1.5rem", // 🔹 Un poco más grande
    borderRadius: "9999px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem", // 🔹 Letras más grandes
    transition: "transform 0.2s, background-color 0.2s",
  },
  loginButton: {
    backgroundColor: "#FAFAF5",
    color: "rgb(103, 134, 89)",
  },
  registerButton: {
    backgroundColor: "transparent",
    border: "1px solid rgba(245, 242, 231, 0.7)",
    color: "#F5F2E7",
  },
  publishButton: {
    backgroundColor: "rgb(180, 203, 160)",
    color: "#2D3B26",
    borderRadius: "0.6rem",
    fontWeight: "700",
    fontSize: "1.1rem", // 🔹 Aumentado solo Publicar
    padding: "0.7rem 1.6rem",
  },
  logoutButton: {
    backgroundColor: "rgb(192, 214, 174)",
    color: "#2D3B26",
    borderRadius: "0.6rem",
    fontWeight: "700",
    fontSize: "1.1rem", // 🔹 Aumentado solo Salir
    padding: "0.7rem 1.6rem",
  },
  psicologoLink: {
    color: "#FDE68A",
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: "1rem", // 🔹 Un poco más grande
    marginRight: "0.7rem",
    color: "#FAFAF5",
  },
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

  const getLinkStyle = (isPsicologoLink = false) => ({
    ...styles.link,
    ...(isPsicologoLink ? styles.psicologoLink : {}),
  });

  return (
    <nav style={styles.navbar}>
      <div style={styles.navGroup}>
        <Link href="/" style={styles.logo}>
          <img
            src="logo3.png"
            alt="Emphaty Logo"
            width={70}
            height={70}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              transform: "scale(1.25)",
              backgroundColor: "#FAFAF5",
              padding: "4px",
            }}
          />
        </Link>

        <Link href="/testimonios" style={styles.link}>
          Testimonios
        </Link>
        <Link href="/recursos" style={styles.link}>
          Recursos
        </Link>
        <Link href="/sobre-nosotros" style={styles.link}>
          Sobre Nosotros
        </Link>
        <Link href="/chatbot" style={styles.link}>
          Asistente
        </Link>

        {user?.rol === "Psicologo" && (
          <Link href="/testimonios/pendientes" style={getLinkStyle(true)}>
            Pendientes
          </Link>
        )}

        {user && (
          <Link
            href="/testimonios/nuevo"
            style={{ ...styles.authButton, ...styles.publishButton }}
          >
            Publicar
          </Link>
        )}
      </div>

      <div style={styles.navGroup}>
        {!user ? (
          <>
            <Link
              href="/login"
              style={{ ...styles.authButton, ...styles.loginButton }}
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/register"
              style={{ ...styles.authButton, ...styles.registerButton }}
            >
              Registrarse
            </Link>
          </>
        ) : (
          <>
            <span style={styles.userInfo}>
              {user.nombre} ({user.rol})
            </span>
            <button
              onClick={handleLogout}
              style={{ ...styles.authButton, ...styles.logoutButton }}
            >
              Salir
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
