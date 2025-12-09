import { Request, Response, NextFunction } from 'express';

// Simple in-memory rate limiter for demo purposes
// In production, use a proper rate limiting library like express-rate-limit

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // Max 5 login attempts per window

export const loginRateLimiter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const key = `login:${ip}`;
  const now = Date.now();

  // Clean up old entries
  if (store[key] && now > store[key].resetTime) {
    delete store[key];
  }

  if (!store[key]) {
    store[key] = {
      count: 1,
      resetTime: now + WINDOW_MS,
    };
    return next();
  }

  store[key].count++;

  if (store[key].count > MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Demasiados intentos de inicio de sesión. Por favor, intente más tarde.',
    });
  }

  next();
};
