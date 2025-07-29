// Authentication utilities for MEWAYZ platform
import jwt from 'jsonwebtoken';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'moderator';
  plan: 'free' | 'pro' | 'enterprise';
}

export class AuthService {
  private static JWT_SECRET = process.env.JWT_SECRET || 'mewayz-secret-key';

  static generateToken(user: User): string {
    return jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        role: user.role,
        plan: user.plan 
      },
      this.JWT_SECRET,
      { expiresIn: '7d' }
    );
  }

  static verifyToken(token: string): User | null {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as any;
      return {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name || '',
        role: decoded.role || 'user',
        plan: decoded.plan || 'free'
      };
    } catch (error) {
      return null;
    }
  }

  static generateMFASecret(): string {
    // Basic MFA secret generation
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  static verifyMFAToken(secret: string, token: string): boolean {
    // Basic MFA verification (in production, use proper TOTP library)
    return token.length === 6 && /^\d+$/.test(token);
  }
}

export default AuthService; 