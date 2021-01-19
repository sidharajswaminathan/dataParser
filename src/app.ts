import express from 'express';
import bodyParser from 'body-parser';
let parserV1 = require('./version1');
let parserV2 = require('./version2');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', parserV1);
app.use('/api/v2', parserV2);
app.use('/', parserV2);

app.listen(port, () => console.log(`App is running on -->: http://localhost:${port}`));

