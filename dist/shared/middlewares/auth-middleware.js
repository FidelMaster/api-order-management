"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAPIKeyInRequestHeader = void 0;
/**
 * Check if api-key is valid
 * @param req
 * @param res
 * @param next
 */
const checkAPIKeyInRequestHeader = (req, res, next) => {
    const API_KEY = process.env.APP_API_KEY;
    let api_key = req.headers['x-api-key'];
    if (api_key && api_key === API_KEY) {
        next(); // Continuar con la siguiente ruta
    }
    else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
exports.checkAPIKeyInRequestHeader = checkAPIKeyInRequestHeader;
