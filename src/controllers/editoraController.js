const editoraModel = require("../models/editoraModel");

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getAllEditoras();
        res.json(editoras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const getEditora = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const createEditora = async (req, res) => {
    try {
        const { name, publisher} = req.body;
        const newEditora = await editoraModel.createEditora(name, publisher);
        res.status(201).json(newEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar editora." });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { name, publisher } = req.body;
        const updatedEditora = await editoraModel.updateEditora(req.params.id, name, publisher);
        if (!updatedEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(updatedEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, updateEditora, deleteEditora };