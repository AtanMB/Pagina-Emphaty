"use client";
import { useEffect, useState } from "react";

export default function TestimoniosPage() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonios`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setTestimonios(data);
      } catch (err) {
        console.error("Error al obtener testimonios:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Testimonios</h1>

      {testimonios.length === 0 ? (
        <p>No hay testimonios registrados aún.</p>
      ) : (
        <ul className="space-y-4">
          {testimonios.map((t) => (
            <li key={t.Testimonio_ID} className="border p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">{t.Contenido}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
