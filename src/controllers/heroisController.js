const heroiModel = require("../models/heroisModel");

const getAllHerois = async (req, res) => {
    try {
        const herois = await heroiModel.getHerois();
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herois." });
    }
};

const getHeroi = async (req, res) => {
    try {
        const heroi = await heroiModel.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(heroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heroi." });
    }
};

const createHeroi = async (req, res) => {
    try {
        const { name, ability } = req.body;
        const newHeroi = await heroiModel.createHeroi(name, ability);
        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar heroi." });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { name, ability } = req.body;
        const updatedHeroi = await heroiModel.updateHeroi(req.params.id, name, ability);
        if (!updatedHeroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(updatedHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar heroi." });
    }
};

const deleteHeroi = async (req, res) => {
    try {
        const message = await heroiModel.deleteHeroi(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar heroi." });
    }
};

module.exports = { getAllHerois, getHeroi, createHeroi, updateHeroi, deleteHeroi };