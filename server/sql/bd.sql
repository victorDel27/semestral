-- tabla de usuario de la base de datos, contraseña , tipo de usuario, estado y contraseña - plsql

CREATE TABLE usuario(
    id_usuario INTEGER NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    tipo_usuario VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (id_usuario)
);

--insertar datos de usuario - plsql
INSERT INTO usuario (id_usuario, nombre, apellido, correo, contrasena, tipo_usuario, estado) VALUES (
    'admin',
    'admin',
    'admin@mail.com',
    'admin',
    'admin',
    'activo'
);


-- Registro de datos de vacunacion de los usuarios, tomando en cuanta el id del usuario, el id de la vacuna, la fecha de vacunacion y el estado de la vacuna - plsql

CREATE TABLE registro_vacunacion(
    id_registro INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    id_vacuna INTEGER NOT NULL,
    fecha_vacunacion DATE NOT NULL,
    estado_vacuna VARCHAR(50) NOT NULL,
    CONSTRAINT pk_registro_vacunacion PRIMARY KEY (id_registro),
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    CONSTRAINT fk_vacuna FOREIGN KEY (id_vacuna) REFERENCES vacuna(id_vacuna)
);

--tabla de vacunas-- plsql

CREATE TABLE vacuna(
    id_vacuna INTEGER NOT NULL,
    nombre_vacuna VARCHAR(50) NOT NULL,
    CONSTRAINT pk_vacuna PRIMARY KEY (id_vacuna)
);
