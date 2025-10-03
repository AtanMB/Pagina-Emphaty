const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

router.post("/", usuariosController.crearUsuario);
router.get("/", usuariosController.listarUsuarios);

module.exports = router;
