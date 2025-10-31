"use client";

export default function TestimonioCard({ contenido, fecha, autor }) {
  return (
    <div className="border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow bg-white">
      <p className="text-gray-800 text-lg mb-2 leading-relaxed">{contenido}</p>
      <div className="text-sm text-gray-500 flex justify-between">
        {autor && <span>👤 {autor}</span>}
        {fecha && <span>📅 {new Date(fecha).toLocaleDateString()}</span>}
      </div>
    </div>
  );
}
