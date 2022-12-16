import express, { Express, Request, Response } from 'express';
const bodyParser = require('body-parser')
const valueValidation = require('./middlewares/checkValue');
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Bienvenue sur cette API calculatrice !</h1>');
});

//@route POST /add
//@desc Add numbers
//@access Public
app.post('/add', valueValidation, (req: Request, res: Response) => {
  const values = req.body.values;
  const result = values.reduce((a: number, b: number) => a + b);
  res.json({ result });
})

//@route POST /substract
//@desc Substract numbers
//@access Public
app.post('/substract', valueValidation, (req: Request, res: Response) => {
  const values = req.body.values;
  const result = values.reduce((a: number, b: number) => a - b);
  res.json({ result });
})

//@route POST /multiply
//@desc Multiply numbers
//@access Public
app.post('/multiply', valueValidation, (req: Request, res: Response) => {
  const values = req.body.values;
  const result = values.reduce((a: number, b: number) => a * b);
  res.json({ result });
})

//@route POST /divide
//@desc Divide numbers
//@access Public
app.post('/divide', valueValidation, (req: Request, res: Response) => {
  const values = req.body.values;
  const result = values.reduce((a: number, b: number) => a / b);
  res.json({ result });
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});