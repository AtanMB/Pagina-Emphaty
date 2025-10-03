import { useEffect, useState } from "react";
import { getTestimonios } from "../api";

export default function Testimonios() {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    getTestimonios().then(setTestimonios);
  }, []);

  return (
    <div>
      <h2>Testimonios Aprobados</h2>
      <ul>
        {testimonios.map((t) => (
          <li key={t.Testimonio_ID}>
            <p>{t.Contenido}</p>
            <small>Publicado: {t.Fecha_Publicacion}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
