"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { useRouter } from "next/navigation";

const styles = {
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#FAFAF5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    },
    formCard: {
        backgroundColor: '#FAFAF5',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 6px 14px rgba(0,0,0,0.1)',
        borderTop: '5px solid rgb(103, 134, 89)',
        maxWidth: '400px',
        width: '100%',
        transition: 'all 0.3s ease',
        cursor: 'default',
    },
    formCardHover: {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: '800',
        color: 'rgb(103, 134, 89)',
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        padding: '0.75rem',
        border: '1px solid #D1D5DB',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        transition: 'border-color 0.2s',
        fontFamily: 'inherit',
    },
    button: {
        backgroundColor: 'rgb(144, 176, 126)', // Verde armonioso
        color: 'white',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        marginTop: '0.5rem',
        transition: 'all 0.2s',
    },
    buttonHover: {
        backgroundColor: 'rgb(103, 134, 89)',
    },
    footerText: {
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: '#374151',
    },
    footerLink: {
        color: '#2563EB',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '0.25rem',
    }
};

export default function LoginPage() {
    const [form, setForm] = useState({ correo: "", contrasena: "" });
    const [hover, setHover] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await apiRequest("/auth/login", "POST", form);
            localStorage.setItem("token", res.token);
            alert("Inicio de sesión exitoso");
            router.push("/testimonios");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div
                style={{ ...styles.formCard, ...(hover ? styles.formCardHover : {}) }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <h1 style={styles.title}>Iniciar Sesión</h1>

                <form onSubmit={handleSubmit} style={styles.formGroup}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={form.correo}
                        onChange={e => setForm({ ...form, correo: e.target.value })}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={form.contrasena}
                        onChange={e => setForm({ ...form, contrasena: e.target.value })}
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Ingresar
                    </button>

                    <p style={styles.footerText}>
                        ¿No tienes cuenta?
                        <span
                            onClick={() => router.push('/register')}
                            style={styles.footerLink}
                        >
                            Regístrate aquí
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}
