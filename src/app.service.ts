import { Injectable } from '@nestjs/common';

/**
 * Root service of the application.
 * Provides application-level business logic and utility methods.
 *
 * @class AppService
 */
@Injectable()
export class AppService {
  /**
   * Returns a welcome message for the application.
   * Used by the root controller to greet users accessing the base URL.
   *
   * @returns {string} Welcome message string
   */
  getHello(): string {
    return 'Welcome to the NestJS Application!';
  }
}
