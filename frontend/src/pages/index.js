// /pages/index.js
export default function Home() {
  return (
    <section>
      <h1>Bienvenido a Emphaty</h1>
      <p>
        En <strong>Emphaty</strong> creemos que cuidar la salud mental es tan importante 
        como cuidar el cuerpo. Por eso, creamos un espacio digital donde puedes 
        expresarte sin miedo, conectar con otros y sentirte acompañado en los 
        momentos difíciles.
      </p>

      <img
        src="https://www.psicoglobal.com/img/uploads/2019/empatia-cabezas.jpg"
        alt="Bienestar emocional y empatía"
      />

      <div className="mision-vision-container">
        <div className="card">
          <h2>Misión</h2>
          <p>
            Ofrecer un entorno seguro, empático y accesible donde 
            las personas puedan compartir sus emociones, encontrar recursos de apoyo 
            psicológico y sentirse escuchadas sin juicios.
          </p>
        </div>

        <div className="card">
          <h2>Visión</h2>
          <p>
            Construir una comunidad digital que normalice hablar de la salud 
            mental, fomente la empatía y promueva el bienestar emocional 
            a través de la tecnología y la conexión humana.
          </p>
        </div>
      </div>
    </section>
  );
}
