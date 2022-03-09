CREATE TABLE profile (
    profile_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone INT,
    role VARCHAR(255),
    address VARCHAR(255)
);

CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    image bytea,
    price DEC
);

CREATE TABLE purchaseItem (
    purchaseItem_id SERIAL PRIMARY KEY,
    product_id INT,
    count INT,
    CONSTRAINT fk_product
        FOREIGN KEY(product_id) 
            REFERENCES product(product_id)
);

CREATE TABLE "order" (
    order_id SERIAL PRIMARY KEY,
    profile_id INT,
    purchaseItem_id INT,
    comment VARCHAR(255),
    CONSTRAINT fk_profile
        FOREIGN KEY(profile_id) 
	        REFERENCES profile(profile_id),
    CONSTRAINT fk_purchaseItem
        FOREIGN KEY(purchaseItem_id) 
            REFERENCES purchaseItem(purchaseItem_id)
);