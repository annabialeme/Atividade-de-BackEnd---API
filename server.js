require("dotenv").config();
const express = require("express");
const cors = require("cors");
const editorasRoutes = require("./src/routes/editoraRoutes");
const heroiRoutes = require("./src/routes/heroisRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const setupSwagger = require('./src/config/swagger'); 
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app); //

app.use("/api", editorasRoutes);
app.use("/api", heroiRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});