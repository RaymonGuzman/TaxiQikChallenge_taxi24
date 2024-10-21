import { Module } from '@nestjs/common'
// import { DriversService } from './services/drivers.service'
// import { DriversController } from './controllers/drivers.controller'
import { ReceiptsController } from './controllers/receipts.controller'
import { ReceiptsService } from './services/receipts.service'
import { DatabaseModule } from '../database/database.module'
import { TripsService } from '@trips/services/trips.service'

@Module({
  providers: [ReceiptsService, TripsService],
  controllers: [ReceiptsController],
  exports: [ReceiptsService],
  imports: [DatabaseModule],
})

export class ReceiptsModule { }
