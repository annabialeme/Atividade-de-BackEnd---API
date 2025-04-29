const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const heroiModel = require("../models/heroisModel");


const exportHeroiPDF = async (req, res) => {
    try {
        const herois = await heroiModel.getAllHerois();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=herois.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

    
        doc.fontSize(20).text("Relatorio de Heróis", {align: "center"});
        doc.moveDown();

       
        doc.fontSize(12).text("Id | Nome | Habilidade", {underline: true});
        doc.moveDown(0.5);

        
        herois.forEach((heroi) => {
            doc.text(
                `${heroi.id} | ${heroi.name} | ${heroi.habilidade}`
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o pdf"}); 
    }
};

module.exports = { exportHeroiPDF };