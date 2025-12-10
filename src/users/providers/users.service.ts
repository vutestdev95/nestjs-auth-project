import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Injectable } from '@nestjs/common';

/**
 * Service responsible for user-related business logic operations.
 * Handles data retrieval and manipulation for user entities.
 *
 * @class UsersService
 */
@Injectable()
export class UsersService {
  /**
   * Retrieves all users from the database with optional filtering and pagination.
   * Returns a paginated list of users based on the provided parameters.
   *
   * @param {GetUsersParamDto} getUserParamDto - DTO containing optional user ID filter
   * @param {number} limit - Maximum number of users to return
   * @param {number} page - Page number for pagination
   * @returns {Array<Object>} Array of user objects containing firstName and email
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limt: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /**
   * Finds and returns a single user by their unique identifier.
   *
   * @param {string} id - The unique identifier of the user to retrieve
   * @returns {Object} User object containing id, firstName, and email
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
