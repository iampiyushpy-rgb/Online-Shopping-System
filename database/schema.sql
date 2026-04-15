CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('buyer', 'admin', 'seller') DEFAULT 'buyer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 3. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10, 2),
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 4. Seed Data (Critical for your app.py logic)
-- This creates the user that seller_id=1 refers to
INSERT IGNORE INTO users (id, name, email, password, role) 
VALUES (1, 'Default Seller', 'seller@pbssd.gov.in', 'pbssd123', 'seller');

INSERT IGNORE INTO products (seller_id, name, price, description, stock, image_url) 
VALUES (1, 'Sample Laptop', 45000.00, 'High performance machine', 5, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853');
create Table sign_up(
User_image BLOB,
Full_name VARCHAR(100),
Email_address VARCHAR(100),
Phone bigint,
Location text,
Password VARCHAR(100));