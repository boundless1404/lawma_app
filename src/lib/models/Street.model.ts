import { IsNotEmpty, Max } from 'class-validator';
import { BaseModel } from './base.model';

export class StreetModel extends BaseModel {
  id: string;

  @IsNotEmpty({ message: 'Street name is required' })
  @Max(50)
  name: string;

  @IsNotEmpty({ message: 'Select an Lga' })
  lgaId: string;

  @IsNotEmpty({ message: 'Select an Lga ward' })
  lgaWardId: string;
}
