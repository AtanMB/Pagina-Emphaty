"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import { getUserFromToken } from "@/lib/auth";

export default function PendientesPage() {
  const [testimonios, setTestimonios] = useState([]);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const user = getUserFromToken();

  useEffect(() => {
    if (user?.rol !== "Psicologo") return;
    apiRequest("/testimonios/pendientes", "GET", null, token)
      .then(setTestimonios)
      .catch((err) => console.error(err));
  }, []);

  const manejarRevision = async (id, accion) => {
    try {
      await apiRequest(`/testimonios/${id}/revisar`, "PUT", { accion }, token);
      alert(`Testimonio ${accion}`);
      setTestimonios((prev) => prev.filter((t) => t.Testimonio_ID !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (user?.rol !== "Psicologo") {
    return <div className="p-6 text-center text-red-500">No autorizado</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Testimonios Pendientes</h1>

      {testimonios.length === 0 ? (
        <p>No hay testimonios pendientes.</p>
      ) : (
        <ul className="space-y-4">
          {testimonios.map((t) => (
            <li
              key={t.Testimonio_ID || t.id || `${t.nombre}-${t.testimonio}`}
              className="border p-4 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold">{t.nombre}</h2>
              <p className="text-gray-700">{t.testimonio}</p>

              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => manejarRevision(t.Testimonio_ID, "Aprobado")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Aprobar
                </button>
                <button
                  onClick={() => manejarRevision(t.Testimonio_ID, "Rechazado")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Rechazar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
