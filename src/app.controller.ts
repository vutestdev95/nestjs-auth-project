import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Root controller of the application.
 * Handles requests to the base route and provides application-level endpoints.
 *
 * @class AppController
 */
@Controller('/')
export class AppController {
  /**
   * Creates an instance of AppController.
   *
   * @param {AppService} appService - The injected application service
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Handles GET requests to the root endpoint.
   * Returns a welcome message for the application.
   *
   * @returns {string} Welcome message string
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
