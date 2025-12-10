/*
 * Swagger Specific Imports
 */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

/**
 * Bootstrap function that initializes and configures the NestJS application.
 * Sets up global validation pipes, Swagger documentation, and starts the HTTP server.
 *
 * Configures the following features:
 * - Global validation with whitelist and transformation
 * - Swagger API documentation at /api endpoint
 * - HTTP server listening on port 3000
 *
 * @async
 * @function bootstrap
 * @returns {Promise<void>} Promise that resolves when the application has started
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
   * Use validation pipes globally
   * Enables automatic validation of incoming requests against DTOs
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /*
   * Install Swagger
   * npm i @nestjs/swagger@7.3.0
   */

  // Create the swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Masterclass - Blog app API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000/')
    .setVersion('1.0')
    .build();
  // Instantiate Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
