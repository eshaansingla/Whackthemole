import express from 'express';
import {dirname} from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(express.static((__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});
app.post("/play",(req,res)=>{
    res.sendFile(__dirname+"/public/play.html");
});
app.listen(port,()=>{
console.log(`listening on ${port}.`);
});
