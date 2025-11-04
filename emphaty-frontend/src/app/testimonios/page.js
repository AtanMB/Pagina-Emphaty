"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
// Asumiendo que has movido o crearás TestimonioCard en "@/components/TestimonioCard"
import TestimonioCard from "@/components/TestimonioCard"; 
// No necesitas importar "./globals.css" aquí si usas Tailwind en todo el proyecto
// import "./globals.css"; 

export default function TestimoniosPage() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    // La lógica de la API permanece igual
    apiRequest("/testimonios")
      .then(setTestimonios)
      .catch((err) => console.error("Error al obtener testimonios:", err));
  }, []);

  return (
    // Contenedor principal: padding amplio y fondo sutil
    <div className="min-h-screen bg-gray-50 p-8 md:p-12">
      
      {/* Título y subtítulo */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Historias que Inspiran</h1>
        <p className="text-gray-600 text-lg">Lee los testimonios de quienes han encontrado apoyo.</p>
      </div>

      {testimonios.length === 0 ? (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md text-center">
            <p className="text-gray-500 text-lg">No hay testimonios disponibles aún. Sé el primero en compartir tu historia.</p>
        </div>
      ) : (
        // Cuadrícula moderna: 1 columna en móvil, 2 en tablets, 3 en desktop
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t) => (
            <TestimonioCard
              key={t.Testimonio_ID || t.id}
              // Las props se mantienen igual
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