const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor PUTITOS" });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

//login
app.get("/login", (req, res) => {
    res.json({ message: "Login" });
});