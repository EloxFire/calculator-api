import { Request, Response } from 'express';

module.exports = async function checkValue(req: Request, res: Response, next: Function) {
  const values = req.body.values;
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (typeof (element) !== 'number') {
      return res.status(400).json({ message: 'Value must be a number' });
    } else {
      next();
    }
  }
}