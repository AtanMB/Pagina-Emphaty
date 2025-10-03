import { useState } from "react";
import { login } from "../api";

export default function Login({ setToken }) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login(correo, contraseña);
    if (data.token) {
      setToken(data.token);
      localStorage.setItem("token", data.token);
      alert("✅ Login exitoso");
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}
