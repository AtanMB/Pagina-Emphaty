
// puerto de la base de datos 3306
//contra empaticos

require("dotenv").config();
const express = require("express");
const usuariosRoutes = require("./routes/usuarios");
const testimoniosRoutes = require("./routes/testimonios");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

// Rutas públicas / protegidas
app.use("/auth", authRoutes);         // /auth/register, /auth/login
app.use("/usuarios", usuariosRoutes); // rutas de usuarios (a ajustar si quieres proteger)
app.use("/testimonios", testimoniosRoutes);

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
  