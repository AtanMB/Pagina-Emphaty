// /pages/sobre-nosotros.js
export default function SobreNosotros() {
  return (
    <section>
      <h1>Sobre Nosotros</h1>
      <p>
        <strong>Emphaty</strong> nace del deseo de romper los estigmas que rodean la salud mental. 
        Observamos cómo muchas personas callan su dolor por miedo al juicio o a la indiferencia, 
        y decidimos crear un espacio digital donde la empatía y la comprensión sean la base 
        de toda interacción.
      </p>

      <img
        src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80"
        alt="Apoyo y comunidad emocional"
      />

      <p>
        Nuestro equipo está conformado por jóvenes apasionados por la tecnología y el bienestar 
        emocional. Creemos que la tecnología puede ser un puente hacia la comprensión, 
        la conexión y el apoyo mutuo.
      </p>

      <h2>Nuestros Valores</h2>
      <ul>
        <li><strong>Empatía:</strong> Escuchar sin juzgar, comprender sin imponer.</li>
        <li><strong>Confidencialidad:</strong> Cada historia merece respeto y privacidad.</li>
        <li><strong>Accesibilidad:</strong> Un espacio abierto a todos, sin barreras.</li>
        <li><strong>Humanidad:</strong> Detrás de cada pantalla, hay una persona que importa.</li>
      </ul>

      {/* Nueva sección del equipo */}
      <div className="equipo-container">
        <h2>Nuestro Equipo</h2>
        <div className="equipo-grid">
          <div className="miembro">
            <img
              src="https://avatars.githubusercontent.com/u/216090532?v=4"
              alt="Jhonatan Martinez"
            />
            <h3>Jhonatan Martinez Bedoya</h3>
            <p>Desarrollador Front-end y Back-end</p>
          </div>

          <div className="miembro">
            <img
              src="https://pbs.twimg.com/media/GQIUmRia0AAHPAL?format=jpg&name=4096x4096"
              alt="Nicolás Vélez"
            />
            <h3>Nicolás Vélez Arango</h3>
            <p>Desarrollador Back-end</p>
          </div>

          <div className="miembro">
            <img
              src="https://avatars.githubusercontent.com/u/142190109?v=4"
              alt="Alejandro Marsiglia"
            />
            <h3>Alejandro Marsiglia Dávila</h3>
            <p>Desarrollador Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}
