const express = require('express');
const app = express();
//supabase
const supabase = require('./config/supabaseC.js');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ${PORT}');
});

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor PUTITOS" });
});

//login
app.get("/login", (req, res) => {
    res.json({ message: "Login" });
});

//mostrar cada campo de la tabla usuario
app.get("/user", async (req, res) => {
    const { data, error } = await supabase
        .from('usuario')
        .select('*')
    res.json(data);
}
);
