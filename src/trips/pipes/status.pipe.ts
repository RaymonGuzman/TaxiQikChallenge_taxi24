import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { TripsStatus } from '@prisma/client'

@Injectable()
export class TripsStatusArrayPipe implements PipeTransform<string, string[]> {
  transform(value: any): string[] {
    const values = value.split(',')
    const validStatusValues = Object.values(TripsStatus)

    for (const status of values) {
      if (!validStatusValues.includes(status)) {
        throw new BadRequestException(`Invalid status value: ${status}`)
      }
    }

    return values
  }
}