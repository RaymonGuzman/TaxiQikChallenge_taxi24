import { Controller, Get, Post, Put, Body, Param, ParseIntPipe, ParseEnumPipe, Query } from '@nestjs/common'
import { CreateTripDto } from '@trips/dtos/trips.dto'
import { TripsStatus } from '@prisma/client'
import { TripsStatusArrayPipe } from '@trips/pipes/status.pipe'
import { TripsService } from '../services/trips.service'

@Controller('trips')
export class TripsController {
  constructor(private readonly tripService: TripsService) { }

  @Get()
  async findByStatus(@Query('status', new TripsStatusArrayPipe()) status: TripsStatus[]) {
    const trips = await this.tripService.findByStatus(status)
    return { trips }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const trip = await this.tripService.findOne(id)
    return { trip }
  }

  @Post('request')
  async create(@Body() input: CreateTripDto) {
    const trip = await this.tripService.request(input)
    return { trip }
  }

  @Put(':id/:status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    // TODO: Move this param to body request
    @Param('status', new ParseEnumPipe(TripsStatus)) status: TripsStatus
  ) {
    const trip = await this.tripService.updateStatus(id, status)
    return { trip }
  }
}
