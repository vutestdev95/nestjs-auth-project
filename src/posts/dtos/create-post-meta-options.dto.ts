import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Data Transfer Object for creating custom metadata options for blog posts.
 * Allows storing arbitrary key-value pairs as post metadata.
 * Useful for extending post functionality with custom fields.
 *
 * @class CreatePostMetaOptionsDto
 */
export class CreatePostMetaOptionsDto {
  /**
   * The key/name of the metadata field.
   * Must be a non-empty string that identifies the metadata option.
   *
   * @type {string}
   * @example 'sidebarEnabled'
   */
  @IsString()
  @IsNotEmpty()
  key: string;

  /**
   * The value of the metadata field.
   * Can be of any type (string, number, boolean, object, etc.).
   * Must not be empty.
   *
   * @type {any}
   * @example true
   */
  @IsNotEmpty()
  value: any;
}
