"use client";
import React from "react";

export default function SobreNosotrosPage() {
  const imgBoxStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "9999px",
    overflow: "hidden",
    border: "4px solid rgb(103, 134, 89)",
    display: "block",
    marginBottom: "1rem",
    flexShrink: 0,
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // asegura que la imagen cubra el contenedor sin deformarse
    display: "block",
  };

  return (
    <section style={{ minHeight: "100vh", backgroundColor: "#f4f7f3", padding: "3rem 1.5rem" }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{ textAlign: "center", fontSize: "2.25rem", fontWeight: 800, color: "rgb(103, 134, 89)", marginBottom: "1.5rem" }}>
          Sobre Nosotros
        </h1>

        <p style={{ textAlign: "center", color: "#374151", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "900px", margin: "0 auto 1.5rem" }}>
          <strong style={{ color: "rgb(103, 134, 89)" }}>Emphaty</strong> nace del deseo de romper los estigmas que rodean la salud mental. Creamos un espacio digital donde la empatía, el respeto y la comprensión son la base de cada interacción.
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <img
            src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80"
            alt="Apoyo y comunidad emocional"
            style={{ width: "100%", maxWidth: "800px", height: "300px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
          />
        </div>

        <p style={{ textAlign: "center", color: "#374151", fontSize: "1.02rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
          Nuestro equipo está conformado por jóvenes apasionados por la tecnología y el bienestar emocional. Creemos que la innovación puede ser un puente hacia la comprensión y el apoyo mutuo.
        </p>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ color: "rgb(103, 134, 89)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>Nuestro Equipo</h2>
        </div>

        <div style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
        }}>
          {/* Tarjeta 1 */}
          <div style={{ backgroundColor: "#f7faf6", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 6px 14px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={imgBoxStyle}>
              <img src="https://avatars.githubusercontent.com/u/216090532?v=4" alt="Jhonatan Martinez" style={imgStyle} />
            </div>
            <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#1f2937" }}>Jhonatan Martinez Bedoya</h3>
            <p style={{ margin: "0.35rem 0 0", color: "#4b5563" }}>Desarrollador Front-end y Back-end</p>
          </div>

          {/* Tarjeta 2 */}
          <div style={{ backgroundColor: "#f7faf6", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 6px 14px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={imgBoxStyle}>
              <img src="https://pbs.twimg.com/media/GQIUmRia0AAHPAL?format=jpg&name=4096x4096" alt="Nicolás Vélez" style={imgStyle} />
            </div>
            <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#1f2937" }}>Nicolás Vélez Arango</h3>
            <p style={{ margin: "0.35rem 0 0", color: "#4b5563" }}>Desarrollador Front-end</p>
          </div>

          {/* Tarjeta 3 */}
          <div style={{ backgroundColor: "#f7faf6", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 6px 14px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={imgBoxStyle}>
              <img src="https://avatars.githubusercontent.com/u/142190109?v=4" alt="Alejandro Marsiglia" style={imgStyle} />
            </div>
            <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#1f2937" }}>Alejandro Marsiglia Dávila</h3>
            <p style={{ margin: "0.35rem 0 0", color: "#4b5563" }}>Diseñador</p>
          </div>
        </div>
      </div>
    </section>
  );
}
