CREATE DATABASE kotadb;

CREATE TABLE users (
    user_id uuid  PRIMARY KEY DEFAULT uuid_generate_v4 (),
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

INSERT INTO users (
    name,
    email,
    password
)
VALUES
    (
        'John',
        'john.smith@example.com',
        '408-237-2345'
    ),
    (
        'Jane',
        'jane.smith@example.com',
        '408-237-2344'
    ),
    (
        'Alex',
        'alex.smith@example.com',
        '408-237-2343'
    );

-- CREATE TABLE product (
--     product_id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     image bytea,
--     price DEC
-- );

-- CREATE TABLE purchaseItem (
--     purchaseItem_id SERIAL PRIMARY KEY,
--     product_id INT,
--     count INT,
--     CONSTRAINT fk_product
--         FOREIGN KEY(product_id) 
--             REFERENCES product(product_id)
-- );

-- CREATE TABLE "order" (
--     order_id SERIAL PRIMARY KEY,
--     profile_id INT,
--     purchaseItem_id INT,
--     comment VARCHAR(255),
--     CONSTRAINT fk_profile
--         FOREIGN KEY(profile_id) 
-- 	        REFERENCES profile(profile_id),
--     CONSTRAINT fk_purchaseItem
--         FOREIGN KEY(purchaseItem_id) 
--             REFERENCES purchaseItem(purchaseItem_id)
-- );