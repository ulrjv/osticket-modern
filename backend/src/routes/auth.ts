import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import * as authController from '../controllers/authController';
import { loginRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post(
  '/login',
  loginRateLimiter,
  [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').notEmpty().withMessage('Contraseña requerida'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return authController.login(req, res);
  }
);

router.post('/logout', authController.logout);

export default router;
