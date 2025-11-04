"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import { getUserFromToken } from "@/lib/auth";

export default function PendientesPage() {
  const [testimonios, setTestimonios] = useState([]);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const user = getUserFromToken();

  useEffect(() => {
    if (user?.rol !== "Psicologo") return;
    apiRequest("/testimonios/pendientes", "GET", null, token)
      .then(setTestimonios)
      .catch((err) => console.error(err));
  }, []);

  const manejarRevision = async (id, accion) => {
    try {
      await apiRequest(`/testimonios/${id}/revisar`, "PUT", { accion }, token);
      alert(`Testimonio ${accion}`);
      setTestimonios((prev) => prev.filter((t) => t.Testimonio_ID !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (user?.rol !== "Psicologo") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F5F0",
        }}
      >
        <div
          style={{
            backgroundColor: "#FAFAF5",
            padding: "2rem 3rem",
            borderRadius: "1rem",
            boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
            color: "rgb(103, 134, 89)",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          No autorizado
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAFAF5",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            color: "rgb(103, 134, 89)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Testimonios Pendientes
        </h1>

        {testimonios.length === 0 ? (
          <div
            style={{
              backgroundColor: "#fff",
              borderTop: "5px solid rgb(103, 134, 89)",
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              color: "#374151",
            }}
          >
            <p>No hay testimonios pendientes.</p>
          </div>
        ) : (
          <ul style={{ padding: 0, listStyle: "none" }}>
            {testimonios.map((t) => (
              <li
                key={t.Testimonio_ID || t.id}
                style={{
                  backgroundColor: "#FAFAF5",
                  borderTop: "5px solid rgb(103, 134, 89)",
                  borderRadius: "1rem",
                  boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 14px rgba(0, 0, 0, 0.1)";
                }}
              >
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "rgb(103, 134, 89)",
                    marginBottom: "0.75rem",
                  }}
                >
                  👤 {t.nombre || "Anónimo"}
                </h2>

                <blockquote
                  style={{
                    fontStyle: "italic",
                    color: "#374151",
                    fontSize: "1.05rem",
                    lineHeight: "1.6",
                    position: "relative",
                    marginBottom: "1rem",
                    padding: "0.5rem 2rem",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "8px",
                      color: "rgba(103, 134, 89, 0.4)",
                      fontSize: "2.5rem",
                    }}
                  >
                    "
                  </span>
                  {t.Contenido}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      right: "8px",
                      color: "rgba(103, 134, 89, 0.4)",
                      fontSize: "2.5rem",
                    }}
                  >
                    "
                  </span>
                </blockquote>

                <div
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    paddingTop: "1rem",
                    display: "flex",
                    gap: "0.75rem",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() =>
                      manejarRevision(t.Testimonio_ID, "Aprobado")
                    }
                    style={{
                      backgroundColor: "rgb(144, 176, 126)",
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgb(103, 134, 89)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgb(144, 176, 126)")
                    }
                  >
                    ✔ Aprobar
                  </button>

                  <button
                    onClick={() =>
                      manejarRevision(t.Testimonio_ID, "Rechazado")
                    }
                    style={{
                      backgroundColor: "#f9e6e6",
                      color: "#a33",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      fontWeight: "600",
                      border: "1px solid #f0c0c0",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f0dcdc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f9e6e6";
                    }}
                  >
                    ❌ Rechazar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
