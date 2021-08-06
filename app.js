const express = require("express")
const cors = require("cors");
//const routes = require("./src/routes/v1/StudentRouter");
const PORT = process.env.PORT || 3020;

const app = express();

//require("./src/database")

app.use(cors());
app.use(express.json());
//app.use(routes)

app.listen(PORT, function(){
    console.log("rodando na porta 3020")
})