require("dotenv").config();
const expres = require('express');
const app = expres();
const port = process.env.PORT
const bodyParser = require('body-parser');
const cors = require('cors');
const router = expres.Router();
const routes = require('./routes/router');


app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api", router);
routes(router);


app.listen(port, () => {
    console.log(`iniciando en el puerto ${port}`);
});
