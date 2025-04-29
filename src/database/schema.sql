CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    ability VARCHAR(100) NOT NULL
);

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    heroi_id INTEGER REFERENCES herois(id) ON DELETE SET NULL
);

INSERT INTO herois (name, ability) VALUES 
    ('Capitão América', 'Velocidade'),
    ('Doutor Estranho', 'Teleportar'),
    ('Groot', 'Cultivar'),
    ('Thor', 'Força');

INSERT INTO editoras (name, heroi_id) VALUES 
    ('Capitão América', 1),
    ('Doutor Estranho', 2),
    ('Groot', 3),
    ('Thor', 4);
