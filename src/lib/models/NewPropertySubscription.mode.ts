import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { BaseModel } from './base.model';

export class NewPropertySubscriptionModel extends BaseModel {
  @IsNotEmpty({ message: 'Please, enter the property name' })
  propertyName: string;

  @IsNotEmpty({ message: 'Please, enter the property unit' })
  propertyUnit: number;

  expectedMonthlyCost: string;

  @IsNotEmpty({ message: 'Please, select the property type' })
  propertyTypeId: string;

  @IsNotEmpty({ message: 'Please, select the street' })
  streetId: string;

  @IsNotEmpty({ message: 'Please, enter the street number' })
  streetNumner: string;

  @IsOptional()
  oldCode: string;

  @IsNotEmpty({ message: 'Please, select a custiodian' })
  custodianUserId: string;

  @IsBoolean()
  isOwner = false;
}
