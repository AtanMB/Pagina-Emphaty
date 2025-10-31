"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { getUserFromToken } from "@/lib/auth";

export default function NuevoTestimonio() {
  const [contenido, setContenido] = useState("");
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const user = getUserFromToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Debes iniciar sesión primero");
    try {
      await apiRequest("/testimonios", "POST", { contenido, usuarioId: user.id }, token);
      alert("Testimonio enviado para revisión");
      setContenido("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nuevo Testimonio</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={contenido}
          onChange={e => setContenido(e.target.value)}
          placeholder="Escribe tu testimonio..."
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white p-2 rounded">Enviar</button>
      </form>
    </div>
  );
}
