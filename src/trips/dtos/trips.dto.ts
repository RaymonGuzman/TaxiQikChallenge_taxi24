// import { TripsStatus } from '@prisma/client';
import { Transform } from 'class-transformer'
import { IsInt, IsNumber, IsDate } from 'class-validator'

export class CreateTripDto {
  @IsInt()
  driverId: number

  @IsInt()
  passengerId: number

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  fromLatitude: number

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  fromLongitude: number

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  toLatitude: number

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  toLongitude: number
}

export class UpdateTripStatusDto {
  @IsDate()
  startedAt?: Date

  @IsDate()
  endedAt?: Date

  @IsDate()
  cancelledAt?: Date
}

