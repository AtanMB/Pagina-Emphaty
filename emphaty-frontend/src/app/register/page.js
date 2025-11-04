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
    select: {
        padding: '0.75rem',
        border: '1px solid #D1D5DB',
        borderRadius: '0.375rem',
        fontSize: '1rem',
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    button: {
        backgroundColor: '#2563EB', // bg-blue-600
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
    // Nota: El estilo hover no se puede aplicar con CSS en línea
};

export default function RegisterPage() {
    const [form, setForm] = useState({ nombre: "", correo: "", contrasena: "", rol: "Usuario" });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiRequest("/auth/register", "POST", form);
            alert("Registro exitoso");
            router.push("/login");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.formCard}>
                <h1 style={styles.title}>Crea tu Cuenta</h1>
                
                <form onSubmit={handleSubmit} style={styles.formGroup}>
                    
                    <input 
                        placeholder="Nombre completo" 
                        value={form.nombre} 
                        onChange={e => setForm({ ...form, nombre: e.target.value })} 
                        style={styles.input}
                    />
                    
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
                    
                    <label style={{ color: '#4B5563', fontSize: '0.875rem', marginTop: '0.5rem' }}>Tipo de Cuenta:</label>
                    <select 
                        value={form.rol} 
                        onChange={e => setForm({ ...form, rol: e.target.value })}
                        style={styles.select}
                    >
                        <option value="Usuario">Usuario</option>
                        <option value="Psicologo">Psicólogo</option>
                    </select>
                    
                    <button style={styles.button}>
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
}