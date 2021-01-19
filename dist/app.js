"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
let parserV1 = require('./version1');
let parserV2 = require('./version2');
const app = express_1.default();
const port = process.env.PORT || 3333;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/api/v1', parserV1);
app.use('/api/v2', parserV2);
app.use('/', parserV2);
app.listen(port, () => console.log(`App is running on -->: http://localhost:${port}`));
//# sourceMappingURL=app.js.map