import { AuthService } from './providers/auth.service';
import { Controller } from '@nestjs/common';

/**
 * Controller responsible for handling authentication-related HTTP requests.
 * Manages user authentication, login, logout, and token operations.
 *
 * @class AuthController
 */
@Controller('auth')
export class AuthController {
  /**
   * Creates an instance of AuthController.
   *
   * @param {AuthService} authService - The injected authentication service for handling auth operations
   */
  constructor(private readonly authService: AuthService) {}
}
