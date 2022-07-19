const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'authors'

app.use(cors(), express.json(), express.urlencoded({extended:true}))

const config = require("./config/mongoose.config")
config(DB);
const routes = require("./routes/author.routes")
routes(app);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${8000}!`);
})
