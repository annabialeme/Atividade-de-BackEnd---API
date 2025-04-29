const pool = require("../config/database");

const getEditora = async () => {
    const result = await pool.query(
        `SELECT editoras.*, editoras.name AS editoras_name 
        FROM editoras 
        LEFT JOIN editoras ON editoras.heroi_id = editoras.id`
    );
    return result.rows;
};

const getAllEditoras = async () => {
    const result = await pool.query("SELECT * FROM editoras");
    return result.rows
}

const getEditoraById = async (id) => {
    const result = await pool.query(
        `SELECT * FROM editoras
        WHERE id = $1`, [id]
    );
    return result.rows[0];
};

const createEditora = async (id, name, publisher, heroi_id) => {
    const result = await pool.query(
        "INSERT INTO editoras (name, publisher, heroi_id) VALUES ($1, $2, $3) RETURNING *",
        [name, publisher, heroi_id, id]
    );
    return result.rows[0];
};

const updateEditora = async (id, name, publisher, heroi_id) => {
    const result = await pool.query(
        "UPDATE editoras SET name = $1, publisher = $2, heroi_id = $3 WHERE id = $4 RETURNING *",
        [name, publisher, heroi_id, id]
    );
    return result.rows[0];
};

const deleteEditora = async (id) => {
    const result = await pool.query("DELETE FROM editoras WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Editora não encontrada." };
    }

    return { message: "Editora deletada com sucesso." };
};

module.exports = { getEditora, getAllEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };