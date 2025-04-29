CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    ability VARCHAR(100) NOT NULL
);

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    heroi_id INTEGER REFERENCES herois(id) ON DELETE SET NULL
);

INSERT INTO herois (name, ability) VALUES 
    ('Capitão América', 'Velocidade'),
    ('Batman', 'Teleportar'),
    ('Lanterna Verde', 'Cultivar'),
    ('Thor', 'Força');

INSERT INTO editoras (name, publisher, heroi_id) VALUES 
    ('Capitão América', 'Marvel', 1),
    ('Batman', 'DC', 2),
    ('Lanterna Verde', 'DC', 3),
    ('Thor', 'Marvel', 4);
