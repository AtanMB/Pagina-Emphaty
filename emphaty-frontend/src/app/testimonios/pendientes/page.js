"use client";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import { getUserFromToken } from "@/lib/auth";

// Definición de estilos CSS como objetos JavaScript (Mantenidos intactos)
const styles = {
    // Estilos generales del contenedor
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#f3f4f6', // gray-100
        padding: '2rem',
    },
    contentArea: {
        maxWidth: '1280px', // max-w-6xl
        margin: '0 auto',
    },
    // Estilos de la tarjeta de testimonio pendiente
    card: {
        backgroundColor: 'white',
        borderLeft: '4px solid #FCD34D', // border-l-4 border-yellow-500
        padding: '2rem', // p-8
        borderRadius: '0.75rem', // rounded-xl
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1)', // shadow-lg
        transition: 'box-shadow 0.3s',
        marginBottom: '1.5rem' // space-y-6 en el <ul>
    },
    // Estilos del bloque de contenido (para la barra vertical)
    testimonyBlock: {
        color: '#4B5563', // text-gray-700
        fontStyle: 'italic',
        borderLeft: '4px solid #D1D5DB', // border-l-4 border-gray-200
        padding: '0.75rem 0 0.75rem 2rem', // py-3 pl-8 (Separación de 2rem/32px de la barra vertical)
        marginBottom: '1.5rem',
        whiteSpace: 'normal',
        lineHeight: '1.6' // Mejor lectura
    },
    // Estilos de botones
    buttonGroup: {
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #E5E7EB', // border-t border-gray-100
        display: 'flex',
        gap: '0.75rem', // gap-3
    },
    approveButton: {
        backgroundColor: '#10B981', // bg-green-500/600
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    rejectButton: {
        backgroundColor: '#EF4444', // bg-red-500/600
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    title: {
        fontSize: '1.875rem', // text-3xl
        fontWeight: '800', // font-extrabold
        color: '#1E40AF', // text-blue-800
        marginBottom: '1.5rem'
    },
    authError: {
        color: '#EF4444',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold'
    }
};


export default function PendientesPage() {
    const [testimonios, setTestimonios] = useState([]);
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
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
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
                <div style={styles.authError}>No autorizado</div>
            </div>
        );
    }

    return (
        <div style={styles.pageContainer}>
            <div style={styles.contentArea}>
                
                <h1 style={styles.title}>Testimonios Pendientes</h1>

                {testimonios.length === 0 ? (
                    <div style={{ ...styles.card, borderLeft: '4px solid #34D399', textAlign: 'center' }}>
                        <p>No hay testimonios pendientes.</p>
                    </div>
                ) : (
                    <ul style={{ padding: 0, listStyle: 'none' }}>
                        {testimonios.map((t) => (
                            <li
                                key={t.Testimonio_ID || t.id || `${t.nombre}-${t.Contenido}`}
                                style={styles.card}
                            >
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                    Autor: <span style={{ color: '#2563EB' }}>
                                        {/* 💥 CAMBIO APLICADO AQUÍ 💥 */}
                                        {t.nombre ? t.nombre : 'Anónimo'}
                                    </span>
                                </h2>
                                
                                <p style={styles.testimonyBlock}>
                                    {t.Contenido}
                                </p>

                                <div style={styles.buttonGroup}>
                                    <button
                                        onClick={() => manejarRevision(t.Testimonio_ID, "Aprobado")}
                                        style={styles.approveButton}
                                    >
                                        ✅ Aprobar
                                    </button>
                                    <button
                                        onClick={() => manejarRevision(t.Testimonio_ID, "Rechazado")}
                                        style={styles.rejectButton}
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