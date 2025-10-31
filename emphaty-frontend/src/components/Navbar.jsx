"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserFromToken, logout } from "@/lib/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromToken());
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-xl">
          Emphaty
        </Link>
        <Link href="/testimonios">Testimonios</Link>
        {user?.rol === "Psicologo" && <Link href="/testimonios/pendientes">Pendientes</Link>}
        {user && <Link href="/testimonios/nuevo">Publicar</Link>}
      </div>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link href="/login">Iniciar Sesión</Link>
            <Link href="/register">Registrarse</Link>
          </>
        ) : (
          <>
            <span>{user.nombre} ({user.rol})</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Salir</button>
          </>
        )}
      </div>
    </nav>
  );
}
