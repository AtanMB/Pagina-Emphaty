const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
require("dotenv").config();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
const JWT_EXPIRES_IN = "8h"; // ajusta si quieres

// Registro
exports.register = async (req, res) => {
  try {
    const { nombre, correo, contrasena, rol } = req.body;
    if (!nombre || !correo || !contrasena || !rol) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    // Verificar si ya existe correo
    db.query("SELECT Usuario_ID FROM Usuarios WHERE Correo = ?", [correo], async (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (results.length) return res.status(409).json({ error: "Correo ya registrado" });

      const hashed = await bcrypt.hash(contrasena, 10);

      const sql = "INSERT INTO Usuarios (Nombre, Correo, Contrasena, Rol) VALUES (?, ?, ?, ?)";
      db.query(sql, [nombre, correo, hashed, rol], (err2, result) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.status(201).json({ mensaje: "Usuario registrado", id: result.insertId });
      });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Error interno" });
  }
};

// Login
exports.login = (req, res) => {
  const { correo, contrasena } = req.body;
  if (!correo || !contrasena) return res.status(400).json({ error: "Correo y contraseña son requeridos" });

  db.query("SELECT Usuario_ID, Nombre, Correo, Contrasena, Rol FROM Usuarios WHERE Correo = ?", [correo], async (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (!results.length) return res.status(401).json({ error: "Credenciales inválidas" });

    const user = results[0];
    const match = await bcrypt.compare(contrasena, user["Contrasena"]);
    if (!match) return res.status(401).json({ error: "Credenciales inválidas" });

    // Generar token
    const payload = { id: user.Usuario_ID, nombre: user.Nombre, correo: user.Correo, rol: user.Rol };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.json({ mensaje: "Autenticación exitosa", token });
  });
};
