"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ correo: "", contrasena: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest("/auth/login", "POST", form);
      localStorage.setItem("token", res.token);
      alert("Inicio de sesión exitoso");
      router.push("/testimonios");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Correo" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} />
        <input type="password" placeholder="Contraseña" value={form.contrasena} onChange={e => setForm({ ...form, contrasena: e.target.value })} />
        <button className="bg-green-600 text-white p-2 rounded">Ingresar</button>
      </form>
    </div>
  );
}
