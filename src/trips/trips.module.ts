import { Module } from '@nestjs/common'
import { TripsController } from './controllers/trips.controller'
import { TripsService } from './services/trips.service'
import { DatabaseModule } from './../database/database.module'

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TripsService],
  imports: [DatabaseModule],
})

export class TripsModule { }
