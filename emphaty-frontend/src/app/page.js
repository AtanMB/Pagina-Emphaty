"use client";
import React from "react";

export default function SobreNosotrosPage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAFAF5",
        padding: "3rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            color: "rgb(103, 134, 89)",
            marginBottom: "1.5rem",
          }}
        >
          Bienvenido a Emphaty
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#374151",
            lineHeight: "1.8",
            marginBottom: "2rem",
            maxWidth: "800px",
            margin: "0 auto 2rem",
          }}
        >
          En <strong>Emphaty</strong> creemos que cuidar la salud mental es tan
          importante como cuidar el cuerpo. Por eso, creamos un espacio digital
          donde puedes expresarte sin miedo, conectar con otros y sentirte
          acompañado en los momentos difíciles.
        </p>

        <img
          src="https://www.psicoglobal.com/img/uploads/2019/empatia-cabezas.jpg"
          alt="Bienestar emocional y empatía"
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "1rem",
            boxShadow: "0 6px 14px rgba(0, 0, 0, 0.15)",
            marginBottom: "3rem",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {/* Tarjeta Misión */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
              flex: "1 1 320px",
              padding: "2rem",
              maxWidth: "420px",
              borderTop: "6px solid rgb(103, 134, 89)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "rgb(103, 134, 89)",
                marginBottom: "1rem",
              }}
            >
              Misión
            </h2>
            <p
              style={{
                color: "#374151",
                lineHeight: "1.7",
              }}
            >
              Ofrecer un entorno seguro, empático y accesible donde las personas
              puedan compartir sus emociones, encontrar recursos de apoyo
              psicológico y sentirse escuchadas sin juicios.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
              flex: "1 1 320px",
              padding: "2rem",
              maxWidth: "420px",
              borderTop: "6px solid rgb(103, 134, 89)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "rgb(103, 134, 89)",
                marginBottom: "1rem",
              }}
            >
              Visión
            </h2>
            <p
              style={{
                color: "#374151",
                lineHeight: "1.7",
              }}
            >
              Construir una comunidad digital que normalice hablar de la salud
              mental, fomente la empatía y promueva el bienestar emocional a
              través de la tecnología y la conexión humana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
