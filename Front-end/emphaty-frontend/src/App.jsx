import { useState } from "react";
// import Login from "./components/Login";
import Testimonios from "./components/Testimonios";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <div>
      <h1>Plataforma Emphaty</h1>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <button onClick={() => { setToken(null); localStorage.removeItem("token"); }}>Cerrar sesión</button>
          <Testimonios />
        </>
      )}
    </div>
  );
}
