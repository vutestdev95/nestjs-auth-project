import { IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  private readonly id?: number;

  public getId(): number | undefined {
    return this.id;
  }
}
