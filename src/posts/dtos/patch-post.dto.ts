import { CreatePostDto } from './create-post.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object for partially updating a blog post.
 * Extends CreatePostDto with all fields made optional using PartialType.
 * Requires the post ID to identify which post to update.
 *
 * @class PatchPostDto
 * @extends {PartialType(CreatePostDto)}
 */
export class PatchPostDto extends PartialType(CreatePostDto) {
  /**
   * The unique identifier of the post to update.
   * Must be an integer and is required to identify the target post.
   *
   * @type {number}
   * @example 123
   */
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id: number;
}
