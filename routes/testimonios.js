const express = require("express");
const router = express.Router();
const testimoniosController = require("../controllers/testimoniosController");
const { verifyToken, requireRole } = require("../middleware/auth");

// Publicar testimonio: cualquiera autenticado (Usuario)
router.post("/", verifyToken, testimoniosController.publicarTestimonio); // se puede verificar rol si quieres

// Listar aprobados: público
router.get("/", testimoniosController.listarTestimoniosAprobados);

// Listar pendientes: solo Psicologo o Admin
router.get("/pendientes", verifyToken, requireRole("Psicologo"), (req, res) => {
  const sql = "SELECT * FROM Testimonios WHERE Estado = 'Pendiente'";
  const db = require("../db");
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Revisar (aprobar/rechazar): solo Psicologo o Admin
router.put("/:id/revisar", verifyToken, requireRole("Psicologo"), testimoniosController.revisarTestimonio);

module.exports = router;
