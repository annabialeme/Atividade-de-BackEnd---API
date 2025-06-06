const express = require("express");
const router = express.Router();
const editorasController = require("../controllers/editorasController.js");
const upload = require("./../config/upload.js");



/**
 * @swagger
 * tags:
 *   name: Editoras
 *   description: Gerenciamento de Editoras
 */

/**
 * @swagger
 * /api/editoras:
 *   get:
 *     summary: Lista a Editora
 *     tags: [Editoras]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de editoras
 */
router.get("/editoras", editorasController.getAllEditoras);

/**
 * @swagger
 * /api/editoras/{id}:
 *   get:
 *     summary: Busca editora por ID
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora encontrada
 *       404:
 *         description: Editora não encontrada
 */
router.get("/editoras/:id", editorasController.getEditora);

/**
 * @swagger
 * /api/editoras:
 *   post:
 *     summary: Cria uma nova editora
 *     tags: [Editoras]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Editora criado
 */
router.post("/editoras", upload.single("photo"), editorasController.createEditora);

/**
 * @swagger
 * /api/editoras/{id}:
 *   put:
 *     summary: Atualiza a editora
 *     tags: [Editora]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Editora atualizada
 */
router.put("/editoras/:id", editorasController.updateEditora);

/**
 * @swagger
 * /api/editoras/{id}:
 *   delete:
 *     summary: Deleta editora
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora deletada
 */
router.delete("/editoras/:id", editorasController.deleteEditora);

module.exports = router;