// For Documenation refer url: https://docs.nestjs.com/openapi/types-and-parameters
import { postStatus } from '../enums/post-status.enum';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/post-type.enum';
import { Type } from 'class-transformer';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Data Transfer Object for creating a new blog post.
 * Contains validation rules and metadata for post creation.
 * Supports various post types and includes SEO-related fields.
 *
 * @class CreatePostDto
 */
export class CreatePostDto {
  /**
   * The title of the blog post.
   * Must be at least 4 characters long and cannot be empty.
   *
   * @type {string}
   * @example 'My First Blog Post'
   */
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  /**
   * The type of the post.
   * Determines the format and layout of the content.
   * Possible values: 'post', 'page', 'story', 'series'
   *
   * @type {PostType}
   * @example PostType.POST
   */
  @ApiProperty({
    enum: PostType,
    description: "Possible values  'post', 'page', 'story', 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  /**
   * The URL-friendly slug for the post.
   * Must be in kebab-case format (lowercase letters, numbers, and hyphens only).
   * Used for generating SEO-friendly URLs.
   *
   * @type {string}
   * @example 'my-first-blog-post'
   */
  @ApiProperty({
    description: "For example 'my-url'",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  /**
   * The publication status of the post.
   * Controls the visibility and workflow state of the post.
   * Possible values: 'draft', 'scheduled', 'review', 'published'
   *
   * @type {postStatus}
   * @example postStatus.DRAFT
   */
  @ApiProperty({
    enum: postStatus,
    description: "Possible values 'draft', 'scheduled', 'review', 'published'",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  /**
   * The main content of the blog post (optional).
   * Can contain HTML or markdown formatted text.
   *
   * @type {string}
   * @example 'This is the main content of my blog post...'
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  content?: string;

  /**
   * The schema.org structured data for the post (optional).
   * Must be a valid JSON string for SEO and rich snippets.
   * Improves search engine understanding of the content.
   *
   * @type {string}
   * @example '{"@context": "https://schema.org", "@type": "BlogPosting"}'
   */
  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  /**
   * The URL of the featured/cover image for the post (optional).
   * Must be a valid URL format.
   *
   * @type {string}
   * @example 'https://example.com/images/featured.jpg'
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  /**
   * The scheduled publication date and time (optional).
   * Must be in ISO8601 format for consistent date handling.
   *
   * @type {Date}
   * @example '2024-03-16T07:46:32+0000'
   */
  @ApiProperty({
    description: 'Must be a valid timestamp in ISO8601',
    example: '2024-03-16T07:46:32+0000',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  /**
   * Array of tags associated with the post (optional).
   * Each tag must be at least 3 characters long.
   * Used for categorization and search optimization.
   *
   * @type {string[]}
   * @example ['nestjs', 'typescript', 'web-development']
   */
  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  /**
   * Array of custom meta options for the post (optional).
   * Allows storing additional key-value metadata.
   * Useful for custom fields and extended post properties.
   *
   * @type {CreatePostMetaOptionsDto[]}
   * @example [{ key: 'sidebarEnabled', value: true }]
   */
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
