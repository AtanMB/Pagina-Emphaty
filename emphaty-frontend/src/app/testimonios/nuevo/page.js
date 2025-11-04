"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { getUserFromToken } from "@/lib/auth";

// Definición de estilos CSS como objetos JavaScript
const styles = {
    pageContainer: {
        minHeight: 'calc(100vh - 80px)', // Ajuste para navbar
        backgroundColor: '#F3F4F6', // Fondo gris claro
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    },
    card: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.75rem', // rounded-xl
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', // shadow-xl
        maxWidth: '512px', // max-w-lg
        width: '100%',
    },
    title: {
        fontSize: '1.75rem', // text-3xl
        fontWeight: '700', // font-bold
        color: '#1E40AF', // Azul profundo
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem', // gap-4
    },
    textarea: {
        padding: '1rem',
        border: '1px solid #D1D5DB', 
        borderRadius: '0.5rem', // rounded
        fontSize: '1rem',
        minHeight: '200px', // Altura generosa para escribir
        resize: 'vertical',
        fontFamily: 'inherit',
        transition: 'border-color 0.2s',
    },
    button: {
        backgroundColor: '#3B82F6', // bg-blue-600
        color: 'white',
        padding: '0.75rem',
        borderRadius: '0.5rem', // rounded
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    note: {
        fontSize: '0.875rem',
        color: '#6B7280',
        marginTop: '0.5rem',
        textAlign: 'center'
    }
};

export default function NuevoTestimonio() {
    const [contenido, setContenido] = useState("");
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
                <div style={styles.card}>
                    <p style={{ textAlign: 'center', color: '#EF4444', fontWeight: 'bold' }}>
                        Inicia sesión para poder compartir tu testimonio.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <h1 style={styles.title}>Comparte tu Historia</h1>
                <form onSubmit={handleSubmit} style={styles.formGroup}>
                    <textarea
                        value={contenido}
                        onChange={e => setContenido(e.target.value)}
                        placeholder="Escribe tu testimonio aquí. Será revisado por un psicólogo antes de su publicación para asegurar un entorno seguro."
                        style={styles.textarea}
                    />
                    <p style={styles.note}>Tu testimonio se enviará a revisión y será publicado anónimamente</p>

                    <button style={styles.button}>
                        Enviar a Revisión
                    </button>
                </form>
            </div>
        </div>
    );
}