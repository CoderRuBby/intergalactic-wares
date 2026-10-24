CREATE TABLE users.login_credentials (
    credential_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email CITEXT NOT NULL UNIQUE CHECK (length (email) <= 254 AND email LIKE '%@%'),
    password_hash TEXT NOT NULL
);

CREATE TABLE users.users (
    user_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    public_id UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    primary_language TEXT NOT NULL DEFAULT 'en',
    avatar_url TEXT,
    user_bio TEXT CHECK (length(user_bio) <= 250) 
);

CREATE TABLE users.delivery_addresses (
    address_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users.users(user_id) ON DELETE CASCADE,
    address_name TEXT NOT NULL,
    street_address TEXT NOT NULL,
    address_city TEXT NOT NULL,
    state_province TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    is_default BOOLEAN NOT NULL DEFAULT false 
);

CREATE UNIQUE INDEX unique_default_address_per_user 
ON users.delivery_addresses (user_id) 
WHERE (is_default = true);

CREATE TABLE users.payment_methods (
    payment_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users.users(user_id) ON DELETE CASCADE,
    payment_provider TEXT NOT NULL,
    payment_token TEXT NOT NULL,
    card_brand TEXT,
    last_four VARCHAR(4),
    exp_month INT,
    exp_year INT,
    is_default BOOLEAN NOT NULL DEFAULT false    
);

CREATE UNIQUE INDEX unique_default_payment_per_user 
ON users.payment_methods (user_id) 
WHERE (is_default = true);


CREATE TABLE products.categories (
    category_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_parent_id INT REFERENCES products.categories(category_id) ON DELETE RESTRICT,
    category_name TEXT NOT NULL,
    category_slug TEXT NOT NULL UNIQUE
    CONSTRAINT unique_name_per_parent UNIQUE (category_parent_id, category_name)
);


CREATE TABLE products.products (
    product_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INT NOT NULL REFERENCES products.categories(category_id), 
    product_name TEXT NOT NULL,
    product_description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE products.skus (
    sku_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES products.products(product_id) ON DELETE CASCADE,
    sku_code TEXT NOT NULL UNIQUE,
    sku_price NUMERIC(10, 2) NOT NULL,
    stock_qty INT DEFAULT 0,
    sku_attributes JSONB NOT NULL
);


CREATE TABLE reviews.reviews (
    review_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES products.products(product_id) ON DELETE CASCADE,
    user_id BIGINT NOT NULL REFERENCES users.users(user_id) ON DELETE CASCADE,
    rating INT NOT NULL CHECK (rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE shopping_carts.carts (
    cart_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cart_hash UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    user_id BIGINT NOT NULL REFERENCES users.users(user_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE shopping_carts.cart_items (
    item_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cart_id BIGINT NOT NULL REFERENCES shopping_carts.carts(cart_id) ON DELETE CASCADE,
    sku_id BIGINT NOT NULL REFERENCES products.skus(sku_id) ON DELETE CASCADE,
    item_quantity INT DEFAULT 0
);


CREATE TABLE orders.orders (
    order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_number UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    user_id BIGINT NOT NULL REFERENCES users.users(user_id),
    subtotal_amount NUMERIC(10, 2) NOT NULL,
    discount_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    shipping_amount NUMERIC(10, 2) NOT NULL,
    tax_amount NUMERIC(10, 2) NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE orders.order_items (
    order_item_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders.orders(order_id),
    skus_id BIGINT NOT NULL REFERENCES products.skus(sku_id),
    item_quantity INT NOT NULL CHECK (item_quantity > 0),
    price_at_purchase NUMERIC(10, 2) NOT NULL
);