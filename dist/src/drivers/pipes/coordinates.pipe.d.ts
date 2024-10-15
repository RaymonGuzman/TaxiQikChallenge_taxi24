import { PipeTransform } from '@nestjs/common';
import { CoordinatesQuery } from '../dtos/driver.dto';
export declare class CoordinatesValidationPipe implements PipeTransform {
    transform(value: any): Promise<CoordinatesQuery>;
}
