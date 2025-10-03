const db = require("../db");

// Crear usuario
exports.crearUsuario = (req, res) => {
  const { nombre, correo, contrasena, rol } = req.body;
  const sql = "INSERT INTO Usuarios (Nombre, Correo, Contrasena, Rol) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, correo, contrasena, rol], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Usuario registrado", id: result.insertId });
  });
};

// Listar usuarios
exports.listarUsuarios = (req, res) => {
  db.query("SELECT Usuario_ID, Nombre, Correo, Rol FROM Usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
