import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { PostEntity } from './entities/post.entity';

/**
 * Controller responsible for handling blog post-related HTTP requests.
 * Provides endpoints for creating, reading, and updating blog posts.
 *
 * @class PostsController
 */
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  /**
   * Creates an instance of PostsController.
   *
   * @param {PostsService} postsService - The injected posts service for business logic operations
   */
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public async getAllPosts() {
    return this.postsService.getAllPosts();
  }

  /**
   * Creates a new blog post.
   * Validates the post data and persists it to the database.
   *
   * @param {CreatePostDto} createPostDto - The post data for creating a new blog post
   * @returns {void} Logs the post data to console
   */
  @ApiOperation({
    summary: 'Creates a new post for the blog.',
  })
  @ApiResponse({
    status: 201,
    description:
      'You get a success 201 response if the post is created successfully',
  })
  @Post()
  public async createPost(
    @Body() createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return await this.postsService.createOne(createPostDto);
  }

  /**
   * Partially updates an existing blog post.
   * Only the fields provided in the request body will be updated.
   *
   * @param {PatchPostDto} patchPostsDto - The partial post data to update including post ID
   * @returns {void} Logs the updated post data to console
   */
  @ApiOperation({
    summary: 'Updates and existing blog post in the database.',
  })
  @ApiResponse({
    status: 200,
    description:
      'You get a success 20o response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
