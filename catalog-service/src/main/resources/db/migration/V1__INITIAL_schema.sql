DROP TABLE IF EXISTS category;
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id BIGINT,
    FOREIGN KEY (parent_id) REFERENCES category(id)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price FLOAT8 NOT NULL,
    category_id BIGINT NOT NULL,
    stock INTEGER NOT NULL,
    image_url VARCHAR(255),
    created_date TIMESTAMP NOT NULL,
    last_modified_date TIMESTAMP NOT NULL,
    version INTEGER NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);