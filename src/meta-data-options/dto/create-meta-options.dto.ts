import { IsJSON, IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object for creating custom metadata options for blog posts.
 * Allows storing arbitrary key-value pairs as post metadata.
 * Useful for extending post functionality with custom fields.
 *
 * @class CreateMetaOptionsDto
 */
export class CreateMetaOptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
