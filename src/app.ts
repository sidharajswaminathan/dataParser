import express from 'express';
import bodyParser from 'body-parser';
import parseData from './parseQuery';
import userInterface from './app_interface/userInfo';

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let parseInfo = new parseData();
app.post('/api/v1/parse',(req,res)=>{
    let userDetails:userInterface = {firstName:'',lastName:'',clientId:''};
    let resolvedUser = parseInfo.parseUser(req.body.data,userDetails,'v1');
    console.log("request is  ",req.body,"   ",resolvedUser);
    res.status(200).send({ data: resolvedUser });
})

app.post('/api/v2/parse',(req,res)=>{
    let userDetails:userInterface = {firstName:'',lastName:'',clientId:''};
    let resolvedUser = parseInfo.parseUser(req.body.data,userDetails,'v2');
    console.log("request is  ",req.body,"   ",resolvedUser);
    res.status(200).send({ data: resolvedUser });
})

app.listen(port, () => console.log(`App is running on -->: http://localhost:${port}`));

