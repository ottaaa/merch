import { Min, Max } from 'class-validator';

export class UpdateShopDto {
  @Min(1)
  @Max(128)
  name?: string;
}
