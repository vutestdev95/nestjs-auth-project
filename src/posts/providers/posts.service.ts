import { Body, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { MetaDataOptionEntity } from '../../meta-data-options/entities/meta-data-option.entity';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
   * @param metaDataOptionRepository
   * @param postRepository
   */
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(MetaDataOptionEntity)
    private metaDataOptionRepository: Repository<MetaDataOptionEntity>,
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  public async getAllPosts() {
    return this.postRepository.find();
  }

  /**
   * Creates a new blog post.
   * Validates the post data and persists it to the database.
   * @param createPostDto
   */
  public async createOne(@Body() createPostDto: CreatePostDto) {
    const newPost = this.postRepository.create(createPostDto);

    return await this.postRepository.save(newPost);
  }
}
