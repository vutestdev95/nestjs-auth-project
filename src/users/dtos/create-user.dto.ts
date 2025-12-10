import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength, } from 'class-validator';

/**
 * Data Transfer Object for creating a new user.
 * Contains validation rules for user registration data.
 *
 * @class CreateUserDto
 */
export class CreateUserDto {
  /**
   * The first name of the user.
   * Must be a string between 3 and 96 characters.
   *
   * @type {string}
   * @example 'John'
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  /**
   * The last name of the user (optional).
   * If provided, must be a string between 3 and 96 characters.
   *
   * @type {string}
   * @example 'Doe'
   */
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  /**
   * The email address of the user.
   * Must be a valid email format and is required for user registration.
   *
   * @type {string}
   * @example 'john.doe@example.com'
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * The password for the user account.
   * Must be at least 8 characters long and contain at least one letter,
   * one number, and one special character (@$!%*#?&).
   *
   * @type {string}
   * @example 'Password123!'
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  password: string;
}
