const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const editoraModel = require("../models/editoraModel");

const exportEditoraCSV = async (req, res) => {
    try {
        const editoras =  await editoraModel.getEditora();

        res.setHeader("Content-Disposition", "attachment; filename=editoras.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true});
        csvStream.pipe(res);

        editoras.forEach((editora) => {
            csvStream.write({
                Id: editora.id,
                Nome: editora.name,
                Publisher: editora.publisher
            });
        });
        
        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV"});
    }
};

const exportEditoraPDF = async (req, res) => {
    try {
        const editoras = await editoraModel.getAllEditoras();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=editoras.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

    
        doc.fontSize(20).text("Relatorio de Editoras", {align: "center"});
        doc.moveDown();

       
        doc.fontSize(12).text("Id | Nome | Publisher", {underline: true});
        doc.moveDown(0.5);

        
        editoras.forEach((editora) => {
            doc.text(
                `${editora.id} | ${editora.name} | ${editora.publisher}`
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o pdf"}); 
    }
};

module.exports = { exportEditoraCSV, exportEditoraPDF };