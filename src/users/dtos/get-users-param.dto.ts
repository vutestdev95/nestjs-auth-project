import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object for user query parameters.
 * Used to filter users by their unique identifier in GET requests.
 *
 * @class GetUsersParamDto
 */
export class GetUsersParamDto {
  /**
   * The unique identifier of the user (optional).
   * When provided, filters the results to return only the user with this specific ID.
   * Must be an integer value.
   *
   * @type {number}
   * @example 1234
   */
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
