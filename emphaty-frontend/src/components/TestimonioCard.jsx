"use client";

export default function TestimonioCard({ contenido, fecha, autor }) {
  const formattedDate = fecha
    ? new Date(fecha).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : "Fecha desconocida";

  return (
    <div
      style={{
        backgroundColor: "#FAFAF5", // blanco cálido
        borderTop: "5px solid rgb(103, 134, 89)", // verde oliva
        borderRadius: "1rem",
        boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
        padding: "1.5rem",
        transition: "all 0.3s ease",
        marginBottom: "1.5rem",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 14px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Contenido del testimonio */}
      <blockquote
        style={{
          fontStyle: "italic",
          color: "#374151", // gris neutro
          fontSize: "1.05rem",
          marginBottom: "1rem",
          lineHeight: "1.6",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            color: "rgba(103, 134, 89, 0.4)",
            fontSize: "2.5rem",
            lineHeight: "1",
            marginTop: "-8px",
          }}
        >
          "
        </span>
        <p style={{ paddingLeft: "1.5rem", paddingTop: "0.5rem" }}>
          {contenido}
        </p>
      </blockquote>

      {/* Footer con autor y fecha */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.05)",
          paddingTop: "0.75rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          fontSize: "0.9rem",
        }}
      >
        {/* Autor */}
        <span
          style={{
            fontWeight: "600",
            color: "rgb(103, 134, 89)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "16px", height: "16px" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          {autor || "Anónimo"}
        </span>

        {/* Fecha */}
        <span
          style={{
            color: "#6B7280", // gris verdoso
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            whiteSpace: "nowrap",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "16px", height: "16px" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
