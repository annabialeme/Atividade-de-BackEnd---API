const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController")

router.get("/report/csv", reportController.exportEditoraCSV);

router.get("/report/pdf", reportController.exportEditoraPDF)

module.exports = router;