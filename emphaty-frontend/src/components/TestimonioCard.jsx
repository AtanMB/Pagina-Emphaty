// src/components/TestimonioCard.jsx

"use client";

export default function TestimonioCard({ contenido, fecha, autor }) {
  
  // Función para formatear la fecha (manteniendo la corrección anterior)
  const formattedDate = fecha 
    ? new Date(fecha).toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        timeZone: 'UTC' 
      }) 
    : 'Fecha Desconocida';
    
  return (
    // ... estilos del contenedor principal ...
    <div className="bg-white border-t-4 border-blue-500 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
      
      {/* ... Contenido (El Testimonio) ... */}
      <blockquote className="italic text-gray-700 text-lg mb-4 leading-relaxed relative">
        <span className="absolute top-0 left-0 text-blue-300 opacity-50 text-4xl leading-none -mt-3">"</span>
        <p className="pl-6 pt-2">{contenido}</p> 
      </blockquote>
      
      {/* 💥 CORRECCIÓN AQUÍ 💥 */}
      {/* Usamos flex-wrap para que se envuelva en dos líneas si es necesario */}
      <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-sm">
        
        {/* Autor: Ahora puede ocupar su propia línea si es necesario */}
        <span className="font-semibold text-blue-700 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {autor || 'Anónimo'}
        </span>
        
        {/* Fecha: Aseguramos que el texto no se rompa de forma incómoda (whitespace-nowrap) */}
        <span className="text-gray-400 flex items-center gap-1 whitespace-nowrap">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formattedDate}
        </span>
      </div>
    </div>
  );
}