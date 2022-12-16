"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const valueValidation = require('./middlewares/checkValue');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('<h1>Bienvenue sur cette API calculatrice !</h1>');
});
//@route POST /add
//@desc Add numbers
//@access Public
app.post('/add', valueValidation, (req, res) => {
    const values = req.body.values;
    const result = values.reduce((a, b) => a + b);
    res.json({ result });
});
//@route POST /substract
//@desc Substract numbers
//@access Public
app.post('/substract', valueValidation, (req, res) => {
    const values = req.body.values;
    const result = values.reduce((a, b) => a - b);
    res.json({ result });
});
//@route POST /multiply
//@desc Multiply numbers
//@access Public
app.post('/multiply', valueValidation, (req, res) => {
    const values = req.body.values;
    const result = values.reduce((a, b) => a * b);
    res.json({ result });
});
//@route POST /divide
//@desc Divide numbers
//@access Public
app.post('/divide', valueValidation, (req, res) => {
    const values = req.body.values;
    const result = values.reduce((a, b) => a / b);
    res.json({ result });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
