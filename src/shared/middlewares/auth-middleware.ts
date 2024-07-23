// apiKeyMiddleware.ts
import { Request, Response, NextFunction } from 'express';


/**
 * Check if api-key is valid
 * @param req 
 * @param res 
 * @param next 
 */
export const checkAPIKeyInRequestHeader = (req: Request, res: Response, next: NextFunction) => {
  const API_KEY = process.env.APP_API_KEY;

  let api_key = req.headers['x-api-key'] as string;

  if (api_key && api_key === API_KEY) {
    next(); // Continuar con la siguiente ruta
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
