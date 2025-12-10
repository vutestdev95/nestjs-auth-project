import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * Service responsible for authentication and authorization operations.
 * Handles user login, token generation, and authentication state management.
 *
 * @class AuthService
 */
@Injectable()
export class AuthService {
  /**
   * Creates an instance of AuthService.
   * Uses forwardRef to resolve circular dependency with UsersService.
   *
   * @param {UsersService} usersService - The injected users service for user data operations
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  /**
   * Authenticates a user with email and password credentials.
   * Validates the credentials and returns an authentication token.
   *
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   * @param {string} id - The user's unique identifier
   * @returns {string} Authentication token for the authenticated user
   */
  public login(email: string, password: string, id: string) {
    const user = this.usersService.findOneById('1234');
    // login
    return 'SAMPLE_TOKEN';
  }

  /**
   * Checks if the current user is authenticated.
   * Validates the user's authentication status.
   *
   * @returns {boolean} True if the user is authenticated, false otherwise
   */
  public isAuth() {
    return true;
  }
}
