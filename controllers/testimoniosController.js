const db = require("../db");

// Publicar testimonio (usuario)
exports.publicarTestimonio = (req, res) => {
  const { contenido, usuarioId } = req.body;
  const sql = "INSERT INTO Testimonios (Contenido, Estado, Fecha_Publicacion, Usuario_ID) VALUES (?, 'Pendiente', CURDATE(), ?)";
  db.query(sql, [contenido, usuarioId], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Testimonio enviado", id: result.insertId });
  });
};

// Listar testimonios aprobados (públicos)
exports.listarTestimoniosAprobados = (req, res) => {
  db.query("SELECT * FROM Testimonios WHERE Estado = 'Aprobado'", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Psicólogo revisa testimonio
exports.revisarTestimonio = (req, res) => {
  const { id } = req.params;
  const { accion, comentario } = req.body;
  const psicologoId = req.user ? req.user.id : null; // viene del token

  if (!['Aprobado', 'Rechazado'].includes(accion)) {
    return res.status(400).json({ error: "Acción inválida" });
  }

  if (!psicologoId) return res.status(401).json({ error: "No autenticado" });

  const sqlRevision = "INSERT INTO Revisiones (Testimonio_ID, Psicologo_ID, Comentario, Accion, Fecha) VALUES (?, ?, ?, ?, NOW())";
  const sqlUpdate = "UPDATE Testimonios SET Estado = ? WHERE Testimonio_ID = ?";

  db.query(sqlRevision, [id, psicologoId, comentario, accion], (err) => {
    if (err) return res.status(500).json({ error: err });

    db.query(sqlUpdate, [accion, id], (err2) => {
      if (err2) return res.status(500).json({ error: err2 });
      res.json({ mensaje: `Testimonio ${accion}` });
    });
  });
};

