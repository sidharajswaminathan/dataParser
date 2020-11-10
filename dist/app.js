"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const parseQuery_1 = __importDefault(require("./parseQuery"));
const app = express_1.default();
const port = process.env.PORT || 3333;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
let parseInfo = new parseQuery_1.default();
app.post('/api/v1/parse', (req, res) => {
    let userDetails = { firstName: '', lastName: '', clientId: '' };
    let resolvedUser = parseInfo.parseUser(req.body.data, userDetails, 'v1');
    console.log("request is  ", req.body, "   ", resolvedUser);
    res.status(200).send({ data: resolvedUser });
});
app.post('/api/v2/parse', (req, res) => {
    let userDetails = { firstName: '', lastName: '', clientId: '' };
    let resolvedUser = parseInfo.parseUser(req.body.data, userDetails, 'v2');
    console.log("request is  ", req.body, "   ", resolvedUser);
    res.status(200).send({ data: resolvedUser });
});
app.listen(port, () => console.log(`App is running on -->: http://localhost:${port}`));
//# sourceMappingURL=app.js.map