import { PipeTransform } from '@nestjs/common';
export declare class TripsStatusArrayPipe implements PipeTransform<string, string[]> {
    transform(value: any): string[];
}
