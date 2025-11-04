// ‼️ IMPORTANTE: Esto le dice a Next.js que es un Componente de Cliente
"use client"; 

import React, { useState, useRef, useEffect } from 'react';
import styles from './chatbot.module.css'; // Importamos los estilos

// La lógica de respuestas del bot
function getBotResponse(userInput) {
  const text = userInput.toLowerCase();

  if (text.includes("hola") || text.includes("buenos dias")) {
    return "¡Hola! Soy EmphatyBot. ¿Cómo puedo ayudarte hoy? Prueba con palabras clave como 'ansiedad', 'estrés' o 'dormir'";
  }
  if (text.includes("ansiedad")) {
    return "La ansiedad es una reacción normal, pero puede ser abrumadora. Te recomiendo probar técnicas de respiración (como 4-7-8) y visitar nuestra página de Recursos.";
  }
  if (text.includes("estres") || text.includes("estresado")) {
    return "El estrés es común. Intenta identificar la fuente. A veces, un breve descanso, meditación o ejercicio físico pueden ayudar mucho. Mira nuestros videos en Recursos.";
  }
  if (text.includes("dormir") || text.includes("insomnio")) {
    return "Para dormir mejor, intenta mantener un horario regular, evita pantallas antes de acostarte y crea un ambiente relajado. ¿Has probado la meditación guiada?";
  }
  if (text.includes("gracias") || text.includes("adios")) {
    return "¡Un placer ayudarte! Estoy aquí si me necesitas. Que tengas un buen día.";
  }

  return "No entendí muy bien. ¿Podrías reformularlo? Recuerda que soy un bot simple. Prueba con palabras clave sobre salud mental (ansiedad, estrés, dormir).";
}


export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '¡Hola! Soy EmphatyBot, tu asistente de bienestar. ¿Sobre qué te gustaría hablar? y recuerda que es un chatbot en proceso que aun no usa inteligencia artificial' }
  ]);
  const [input, setInput] = useState('');
  const chatWindowRef = useRef(null);

  // Efecto para hacer scroll hacia abajo
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // 1. Añade el mensaje del usuario
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // 2. Obtiene y añade la respuesta del bot (con un pequeño retraso)
    setTimeout(() => {
      const botResponse = { sender: 'bot', text: getBotResponse(input) };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    // 3. Limpia el input
    setInput('');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow} ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form className={styles.inputForm} onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}