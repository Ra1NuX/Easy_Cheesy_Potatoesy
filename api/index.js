const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.json({
        "Status": "OK",
    })
})

app.listen(5000, (req,res) => {
    console.log(`Servidor abierto en el puerto 5000`);
})