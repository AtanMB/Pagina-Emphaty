"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import TestimonioCard from "@/components/TestimonioCard";
import "./globals.css";

export default function TestimoniosPage() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    apiRequest("/testimonios")
      .then(setTestimonios)
      .catch((err) => console.error("Error al obtener testimonios:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Testimonios Aprobados</h1>
      <div className="grid gap-4">
        {testimonios.length === 0 ? (
          <p>No hay testimonios disponibles aún.</p>
        ) : (
          testimonios.map((t) => (
            <TestimonioCard
              key={t.Testimonio_ID || t.id}
              contenido={t.Contenido}
              fecha={t.Fecha_Publicacion}
              autor={t.Autor}
            />
          ))
        )}
      </div>
    </div>
  );
}
