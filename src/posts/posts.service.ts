import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UsersService) {}

  public findAll(userId: number): any {
    const user = this.userService.findOne(userId);
    return [
      { user, title: 'First Post', content: 'This is the first post.' },
      { user, title: 'Second Post', content: 'This is the second post.' },
    ];
  }
}
