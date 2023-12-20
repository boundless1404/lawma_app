import { IsNotEmpty, IsOptional } from 'class-validator';
import { BaseModel } from './base.model';

export class BillingModel extends BaseModel {
  @IsOptional()
  streetId: string;

  @IsOptional()
  propertyName: string;

  @IsNotEmpty({ message: 'Please, write the property subscsription id' })
  propertySuscriptionId: string;

  @IsNotEmpty({ message: 'Please, select the month' })
  month: string;

  @IsNotEmpty({ message: 'Please, select the year' })
  year: string;
}
