import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { DatabaseService } from '../../database/database.service'
import { Trip, TripsStatus } from '@prisma/client'
import { CreateTripDto, UpdateTripStatusDto } from '@trips/dtos/trips.dto'

@Injectable()
export class TripsService {
  constructor(private db: DatabaseService) { }

  async findByStatus(status: TripsStatus[]): Promise<Trip[]> {
    return this.db.trip.findMany({
      where: { status: { in: status } }
    })
  }

  async findOne(id: number): Promise<Trip | null> {
    return this.db.trip.findUnique({ where: { id } })
  }

  async request(data: CreateTripDto): Promise<Trip> {
    // TODO: Validate that driver or passenger has active status
    return this.db.trip.create({ data: { ...data, status: TripsStatus.REQUESTED } })
  }

  async updateStatus(id: number, status: TripsStatus): Promise<Trip> {
    const trip = await this.db.trip.findUnique({ where: { id } })
    if (!trip) {
      throw new NotFoundException(`Trip ID ${id} not found`)
    }

    const data: UpdateTripStatusDto = {}
    if (trip.status === TripsStatus.REQUESTED && status === TripsStatus.IN_PROGRESS) {
      data.startedAt = new Date()
    }

    if (trip.status === TripsStatus.IN_PROGRESS && status === TripsStatus.COMPLETED) {
      data.endedAt = new Date()
    }

    if (trip.status === TripsStatus.REQUESTED && status === TripsStatus.CANCELLED) {
      data.cancelledAt = new Date()
    }

    // If not data to updated, throw error
    if (Object.keys(data).length === 0) {
      throw new BadRequestException('Invalid status change')
    }

    return this.db.trip.update({
      where: { id },
      data: { ...data, status }
    })
  }
}
