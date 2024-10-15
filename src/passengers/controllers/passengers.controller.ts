import { Controller, Post, Body, Get, Param, ParseIntPipe, Query, ParseEnumPipe } from '@nestjs/common'
import { DriversService } from '../../drivers/services/drivers.service'
import { CoordinatesValidationPipe } from '../../drivers/pipes/coordinates.pipe'
import { PassengersService } from '../services/passengers.service'
import { CreatePassengerDto } from '../../passengers/dtos/passenger.dto'
import { CoordinatesQuery, CreateDriverDto } from '../../drivers/dtos/driver.dto'

@Controller('passengers')
export class PassengersController {
    constructor(
        private readonly passengersService: PassengersService,
        private readonly driversService: DriversService
      ) { }
    
      @Get()
      async findAll() {
        const passengers = await this.passengersService.findAll()
        return { passengers }
      }
    
      @Get('trip')
      async requestTrip(@Query(new CoordinatesValidationPipe()) coordinates: CoordinatesQuery) {
        const drivers = await this.driversService.findNearby(coordinates)
        return { drivers }
      }
    
      @Get(':id')
      async findOne(@Param('id', ParseIntPipe) id: number) {
        const trip = await this.passengersService.findOne(id)
        return { trip }
      }

      @Post()
      async create(@Body() input: CreatePassengerDto) {
        const createPassenger = await this.passengersService.create({ ...input })
        return { createPassenger }
      }
}
