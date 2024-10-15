import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service'
import { Passenger, DocumentTypes } from '@prisma/client'
import { CreatePassengerDto } from '../../passengers/dtos/passenger.dto'

@Injectable()
export class PassengersService {
    constructor(private db: DatabaseService) { }

    async findAll(): Promise<Passenger[]> {
      const passengers = this.db.passenger.findMany()
  
      return passengers
    }
  
    async findOne(id: number): Promise<Passenger | null> {
      const passenger = await this.db.passenger.findUnique({
        where: { id }
      })
  
      return passenger
    }
    async create(passenger: CreatePassengerDto): Promise<Passenger> {
      return this.db.passenger.create({
        data: {
          firstName: passenger.firstName,
          lastName: passenger.lastName,
          email: passenger.email,
          phone: passenger.phone,
          document: passenger.document,
          documentType: passenger.documentType as DocumentTypes
        },
      })
    }
}
