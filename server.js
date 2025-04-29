require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/editoraRoutes");
const postRoutes = require("./src/routes/heroisRoutes");
const setupSwagger = require('./src/config/swagger'); 
const path = require("path");



const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app); //

app.use("/api", userRoutes);
app.use("/api", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});