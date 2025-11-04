"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { useRouter } from "next/navigation";

// Definición de estilos CSS como objetos JavaScript
const styles = {
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#F3F4F6', // Fondo gris claro
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    },
    formCard: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.75rem', // rounded-xl
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', // shadow-xl
        maxWidth: '400px',
        width: '100%',
    },
    title: {
        fontSize: '1.75rem', // text-3xl
        fontWeight: '700', // font-bold
        color: '#1F2937', // text-gray-800
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem', // gap-4
    },
    input: {
        padding: '0.75rem',
        border: '1px solid #D1D5DB', // border-gray-300
        borderRadius: '0.375rem', // rounded-md
        fontSize: '1rem',
        transition: 'border-color 0.2s',
    },
    button: {
        backgroundColor: '#10B981', // bg-green-600
        color: 'white',
        padding: '0.75rem',
        borderRadius: '0.375rem',
        fontSize: '1rem',
        fontWeight: '600',
        border: 'none',
        cursor: 'pointer',
        marginTop: '0.5rem',
        transition: 'background-color 0.2s',
    },
};

export default function LoginPage() {
    const [form, setForm] = useState({ correo: "", contrasena: "" });
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
            <div style={styles.formCard}>
                
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
                    
                    <button style={styles.button}>
                        Ingresar
                    </button>
                    
                    {/* Opción para registrarse si no tiene cuenta */}
                    <p style={{textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: '#6B7280'}}>
                        ¿No tienes cuenta? 
                        <span 
                            onClick={() => router.push('/register')} 
                            style={{color: '#2563EB', cursor: 'pointer', fontWeight: 'bold', marginLeft: '0.25rem'}}
                        >
                            Regístrate aquí
                        </span>
                    </p>

                </form>
            </div>
        </div>
    );
}