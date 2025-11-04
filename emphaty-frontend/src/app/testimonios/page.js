"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import TestimonioCard from "@/components/TestimonioCard";

export default function TestimoniosPage() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    apiRequest("/testimonios")
      .then(setTestimonios)
      .catch((err) => console.error("Error al obtener testimonios:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f6f8f4] p-8 md:p-12 flex flex-col items-center">
      
      {/* Título centrado */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[rgb(103,134,89)] mb-3">
          Historias que Inspiran
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Lee los testimonios de quienes han encontrado apoyo y bienestar a través de Emphaty.
        </p>
      </div>

      {/* Contenido */}
      {testimonios.length === 0 ? (
        <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-md text-center border-t-4 border-[rgb(103,134,89)]">
          <p className="text-gray-500 text-lg">
            No hay testimonios disponibles aún.{" "}
            <span className="text-[rgb(103,134,89)] font-semibold">
              Sé el primero en compartir tu historia.
            </span>
          </p>
        </div>
      ) : (
        <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t) => (
            <TestimonioCard
              key={t.Testimonio_ID || t.id}
              contenido={t.Contenido}
              fecha={t.Fecha_Publicacion}
              autor={t.Autor}
            />
          ))}
        </div>
      )}
    </div>
  );
}
