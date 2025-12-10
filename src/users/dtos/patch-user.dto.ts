import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/swagger';

/**
 * Data Transfer Object for partially updating a user.
 * Extends CreateUserDto with all fields made optional using PartialType.
 * Allows updating one or more user fields without requiring all properties.
 *
 * @class PatchUserDto
 * @extends {PartialType(CreateUserDto)}
 */
export class PatchUserDto extends PartialType(CreateUserDto) {}
