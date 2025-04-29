const pool = require("../config/database");

const getHerois = async () => {
    const result = await pool.query("SELECT * FROM herois");
    return result.rows;
};

const getHeroiById = async (id) => {
    const result = await pool.query("SELECT * FROM herois WHERE id = $1", [id]);
    return result.rows[0];
};

const createHeroi = async (name, ability) => {
    const result = await pool.query(
        "INSERT INTO herois (name, ability) VALUES ($1, $2) RETURNING *",
        [name, ability]
    );
    return result.rows[0];
};

const updateHeroi = async (id, name, ability) => {
    const result = await pool.query(
        "UPDATE herois SET name = $1, ability = $2 WHERE id = $3 RETURNING *",
        [name, ability, id]
    );
    return result.rows[0];
};

const deleteHeroi = async (id) => {
    const result = await pool.query("DELETE FROM herois WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Herói não encontrado." };
    }

    return { message: "Herói deletado com sucesso." };
};



module.exports = {getHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi};