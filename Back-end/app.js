

// puerto de la base de datos 3306
// contra empaticos

require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Crear instancia de Express
const app = express();

// ✅ Habilitar CORS antes de las rutas
app.use(cors({
  origin: "http://localhost:3000", // puerto donde corre tu Next.js
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const usuariosRoutes = require("./routes/usuarios");
const testimoniosRoutes = require("./routes/testimonios");
const authRoutes = require("./routes/auth");

// Rutas públicas / protegidas
app.use("/auth", authRoutes);         // /auth/register, /auth/login
app.use("/usuarios", usuariosRoutes); // rutas de usuarios
app.use("/testimonios", testimoniosRoutes);

// Iniciar servidor
app.listen(4000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:4000");
});
