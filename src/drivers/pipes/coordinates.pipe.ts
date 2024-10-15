import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { CoordinatesQuery } from '../dtos/driver.dto'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class CoordinatesValidationPipe implements PipeTransform {
  async transform(value: any): Promise<CoordinatesQuery> {
    const coordinates = plainToClass(CoordinatesQuery, value)
    const errors = await validate(coordinates)

    if (errors.length > 0) {
      throw new BadRequestException({ errors })
    }

    return coordinates
  }
}
