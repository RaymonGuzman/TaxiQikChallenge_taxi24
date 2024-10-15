import { Module } from '@nestjs/common'
import { PassengersService } from './services/passengers.service'
import { PassengersController } from './controllers/passengers.controller'
import { DatabaseModule } from '../database/database.module'
import { DriversService } from '@drivers/services/drivers.service'

@Module({
  providers: [PassengersService, DriversService],
  controllers: [PassengersController],
  exports: [PassengersService],
  imports: [DatabaseModule],
})

export class PassengersModule { }
