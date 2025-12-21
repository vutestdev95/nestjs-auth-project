import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({ description: 'Name of the tag' })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  @IsString()
  name: string;

  @ApiProperty({
    description: "For example 'my-url'",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  @MaxLength(256)
  slug: string;

  @ApiProperty({ description: 'Description of the tag', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(1024)
  description?: string;

  @ApiProperty({ description: 'Schema of the tag', required: false })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiProperty({
    description: 'Featured image URL of the tag',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(1024)
  featuredImage?: string;
}
