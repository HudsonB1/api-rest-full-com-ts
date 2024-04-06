import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

// app port
const port = config.get<number>("port");

app.listen(9696, async () => {
   console.log(`Server started on port ${9696}!`)
});