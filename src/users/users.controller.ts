import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

/**
 * Controller responsible for handling user-related HTTP requests.
 * Provides endpoints for creating, reading, and updating user data.
 *
 * @class UsersController
 */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  /**
   * Creates an instance of UsersController.
   *
   * @param {UsersService} usersService - The injected users service for business logic operations
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Retrieves a paginated list of users or a specific user by ID.
   * Supports optional filtering by user ID and pagination parameters.
   *
   * @param {GetUsersParamDto} getUserParamDto - Optional user ID parameter from route
   * @param {number} limit - Maximum number of users to return per page (default: 10)
   * @param {number} page - Page number for pagination (default: 1)
   * @returns {Array} Array of user objects matching the query criteria
   */
  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application.',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of pages you want the pagination to return',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    description:
      'The position of the page number that you want the API to return',
    required: false,
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  /**
   * Creates a new user in the system.
   * Validates the incoming user data and persists it to the database.
   *
   * @param {CreateUserDto} createUserDto - The user data for creating a new user
   * @returns {string} Confirmation message of user creation
   */
  @Post()
  public async createUsers(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    return await this.usersService.createUser(createUserDto);
  }

  /**
   * Partially updates an existing user's information.
   * Only the fields provided in the request body will be updated.
   *
   * @param {PatchUserDto} patchUserDto - The partial user data to update
   * @returns {PatchUserDto} The updated user data
   */
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
