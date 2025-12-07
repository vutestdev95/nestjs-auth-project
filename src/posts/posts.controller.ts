import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  private readonly postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  @Get('/:userId')
  public getPosts(@Param('userId', ParseIntPipe) userId: number): any {
    return this.postsService.findAll(userId);
  }
}
