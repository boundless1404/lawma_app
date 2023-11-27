import { ValidationError, validate } from 'class-validator';

export class BaseModel {
  errors?: ValidationError[] = [];
  async validate() {
    const errors = await validate(this);
    for (const err of errors) {
      err.constraints;
    }
    this.errors = errors;
  }
}
