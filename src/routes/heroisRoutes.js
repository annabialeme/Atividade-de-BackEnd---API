const express = require("express");
const router = express.Router();
const heroisController = require("../controllers/heroisController.js");
const upload = require("./../config/upload.js");


/**
 * @swagger
 * tags:
 *   name: Herois
 *   description: Gerenciamento de heróis
 */

/**
 * @swagger
 * /api/herois:
 *   get:
 *     summary: Lista todos os heróis
 *     tags: [Herois]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de heróis
 */
router.get("/herois", heroisController.getAllHerois);

/**
 * @swagger
 * /api/herois/{id}:
 *   get:
 *     summary: Busca Herói por ID
 *     tags: [Herois]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Herói encontrado
 *       404:
 *         description: Herói não encontrado
 */
router.get("/herois/:id", heroisController.getHeroi);

/**
 * @swagger
 * /api/herois:
 *   post:
 *     summary: Cria um novo herói
 *     tags: [Herois]
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
 *         description: Herói criado
 */
router.post("/herois", upload.single("photo"), heroisController.createHeroi);

/**
 * @swagger
 * /api/herois/{id}:
 *   put:
 *     summary: Atualiza o herói
 *     tags: [Herois]
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
 *         description: Herói atualizado
 */
router.put("/herois/:id", heroisController.updateHeroi);

/**
 * @swagger
 * /api/herois/{id}:
 *   delete:
 *     summary: Deleta herói
 *     tags: [Herois]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Herói deletado
 */
router.delete("/herois/:id", heroisController.deleteHeroi);

module.exports = router;