CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    naver_id VARCHAR(50) UNIQUE,
    google_id VARCHAR(50) UNIQUE,
    kakao_id VARCHAR(50) UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    nickname VARCHAR(50) NOT NULL UNIQUE,
    profile_image VARCHAR(255),
    introduction VARCHAR(500),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE local (
    id INT AUTO_INCREMENT PRIMARY KEY,
    local VARCHAR(50) NOT NULL
);

CREATE TABLE food_category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    food_category VARCHAR(50) NOT NULL
);

CREATE TABLE theme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    theme VARCHAR(50) NOT NULL
);

CREATE TABLE store (
    id INT AUTO_INCREMENT PRIMARY KEY,
    local_id INT,
    theme_id INT,
    food_category_id INT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    detail_address VARCHAR(255) NOT NULL,
    tel VARCHAR(20),
    image VARCHAR(255),
    latitude DECIMAL(11,8),
    longitude DECIMAL(11,8),
    description VARCHAR(500),
    views INT DEFAULT 0,
    FOREIGN KEY (local_id) REFERENCES local(id),
    FOREIGN KEY (theme_id) REFERENCES theme(id),
    FOREIGN KEY (food_category_id) REFERENCES food_category(id)
);

CREATE TABLE store_like (
    id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT,
    store_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE store_review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT,
    store_id INT,
    score DECIMAL(2,1),
    content VARCHAR(1000),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    description TEXT,
    image VARCHAR(255),
    FOREIGN KEY (store_id) REFERENCES store(id)
);
