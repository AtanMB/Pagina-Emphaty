const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"] || req.headers["Authorization"];
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") return res.status(401).json({ error: "Token mal formado" });

  const token = parts[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });
    req.user = decoded; // payload con id, nombre, correo, rol
    next();
  });
};

// Middleware para verificar rol
exports.requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "No autenticado" });
    if (req.user.rol !== role && req.user.rol !== "Admin") {
      // Admin también puede
      return res.status(403).json({ error: "Acceso denegado: rol insuficiente" });
    }
    next();
  };
};
