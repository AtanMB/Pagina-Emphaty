"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { getUserFromToken } from "@/lib/auth";

const styles = {
    pageContainer: {
        minHeight: 'calc(100vh - 80px)',
        backgroundColor: '#FAFAF5', // Fondo cálido
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    },
    card: {
        backgroundColor: '#FAFAF5',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 6px 14px rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid rgb(103, 134, 89)',
        maxWidth: '512px',
        width: '100%',
        transition: 'all 0.3s ease',
        cursor: 'default',
    },
    cardHover: {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: '800',
        color: 'rgb(103, 134, 89)',
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    textarea: {
        padding: '1rem',
        border: '1px solid #D1D5DB',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        minHeight: '200px',
        resize: 'vertical',
        fontFamily: 'inherit',
        transition: 'border-color 0.2s',
    },
    button: {
        backgroundColor: 'rgb(144, 176, 126)',
        color: 'white',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
    },
    buttonHover: {
        backgroundColor: 'rgb(103, 134, 89)',
    },
    note: {
        fontSize: '0.875rem',
        color: '#374151',
        marginTop: '0.5rem',
        textAlign: 'center'
    }
};

export default function NuevoTestimonio() {
    const [contenido, setContenido] = useState("");
    const [hover, setHover] = useState(false);
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const user = getUserFromToken();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert("Debes iniciar sesión primero");
        try {
            await apiRequest("/testimonios", "POST", { contenido, usuarioId: user.id }, token);
            alert("Testimonio enviado para revisión. ¡Gracias por compartir!");
            setContenido("");
        } catch (err) {
            alert(err.message);
        }
    };

    if (!user) {
        return (
            <div style={styles.pageContainer}>
                <div style={{ ...styles.card, borderTop: '5px solid #EF4444' }}>
                    <p style={{ textAlign: 'center', color: '#EF4444', fontWeight: 'bold' }}>
                        Inicia sesión para poder compartir tu testimonio.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.pageContainer}>
            <div
                style={{
                    ...styles.card,
                    ...(hover ? styles.cardHover : {})
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <h1 style={styles.title}>Comparte tu Historia</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <textarea
                        value={contenido}
                        onChange={e => setContenido(e.target.value)}
                        placeholder="Escribe tu testimonio aquí. Será revisado por un psicólogo antes de su publicación para asegurar un entorno seguro."
                        style={styles.textarea}
                    />
                    <p style={styles.note}>
                        Tu testimonio se enviará a revisión y será publicado anónimamente
                    </p>
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Enviar a Revisión
                    </button>
                </form>
            </div>
        </div>
    );
}
