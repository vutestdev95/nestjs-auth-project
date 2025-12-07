import {
  IsString,
  IsEmail,
  Length,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: 'First name must be a string',
  })
  @IsNotEmpty({
    message: 'First name should not be empty',
  })
  @MaxLength(50, { message: 'First name must be at most 50 characters long' })
  @MinLength(2, { message: 'First name must be at least 2 characters long' })
  private firstName: string;

  @IsString({
    message: 'Last name must be a string',
  })
  @IsNotEmpty({
    message: 'Last name should not be empty',
  })
  @MaxLength(50, { message: 'Last name must be at most 50 characters long' })
  @MinLength(2, { message: 'Last name must be at least 2 characters long' })
  private lastName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({
    message: 'Email should not be empty',
  })
  private email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters' })
  @IsNotEmpty({
    message: 'Password should not be empty',
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  private password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  public get getFirstName(): string {
    return this.firstName;
  }

  public set setFirstName(value: string) {
    this.firstName = value;
  }

  public get getLastName(): string {
    return this.lastName;
  }

  public set setLastName(value: string) {
    this.lastName = value;
  }

  public get getEmail(): string {
    return this.email;
  }

  public set setEmail(value: string) {
    this.email = value;
  }

  public get getPassword(): string {
    return this.password;
  }

  public set setPassword(value: string) {
    this.password = value;
  }
}
