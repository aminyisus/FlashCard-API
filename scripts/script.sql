CREATE TABLE flashcards(
	flashcard_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(32) NOT NULL,
	description VARCHAR(128),
	posted_date DATETIME DEFAULT NOW()
);

CREATE TABLE users(
	user_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(64),
	last_name VARCHAR(64),
	email VARCHAR(64) UNIQUE,
	password VARCHAR(32),
	INDEX (name, last_name)
);



