DROP DATABASE dbcrudusuarios;

CREATE DATABASE dbcrudusuarios;

USE dbcrudusuarios;

CREATE TABLE tbusuarios(
  idUsuario INT(10) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50),
  email VARCHAR(100),
  senha VARCHAR(12),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(idUsuario)
);

INSERT INTO tbusuarios(nome,email,senha)VALUES("Anselmo","anselmo@email.com","12345678");