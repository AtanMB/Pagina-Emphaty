"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", contrasena: "", rol: "Usuario" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiRequest("/auth/register", "POST", form);
      alert("Registro exitoso");
      router.push("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
        <input type="email" placeholder="Correo" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} />
        <input type="password" placeholder="Contraseña" value={form.contrasena} onChange={e => setForm({ ...form, contrasena: e.target.value })} />
        <select value={form.rol} onChange={e => setForm({ ...form, rol: e.target.value })}>
          <option>Usuario</option>
          <option>Psicologo</option>
          <option>Admin</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded">Registrarse</button>
      </form>
    </div>
  );
}
