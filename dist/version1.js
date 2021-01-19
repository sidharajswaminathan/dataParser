"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const parseQuery_1 = __importDefault(require("./parseQuery"));
let v1 = express_1.default.Router();
let parseInfo = new parseQuery_1.default();
v1.post('/parse', (req, res) => {
    let userDetails = { firstName: '', lastName: '', clientId: '' };
    let resolvedUser = parseInfo.parseUser(req.body.data, userDetails, 'v1');
    console.log("request is  ", req.body, "   ", resolvedUser);
    res.status(200).send({ data: resolvedUser });
});
module.exports = v1;
//# sourceMappingURL=version1.js.map