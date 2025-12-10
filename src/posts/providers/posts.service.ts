import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * Service responsible for blog post-related business logic operations.
 * Handles data retrieval and manipulation for blog post entities.
 *
 * @class PostsService
 */
@Injectable()
export class PostsService {
  /**
   * Creates an instance of PostsService.
   *
   * @param {UsersService} usersService - The injected users service to retrieve user data
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Retrieves all posts for a specific user.
   * Fetches the user information and returns associated posts with user details.
   *
   * @param {string} userId - The unique identifier of the user whose posts to retrieve
   * @returns {Array<Object>} Array of post objects containing user, title, and content
   */
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'Test Tile',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Tile 2',
        content: 'Test Content 2',
      },
    ];
  }
}
