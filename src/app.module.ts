import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { DriversModule } from './drivers/drivers.module'
import { PassengersModule } from './passengers/passengers.module'
import { TripsModule } from '@trips/trips.module'
import { ReceiptsModule } from './receipts/receipts.module'


@Module({
  imports: [DatabaseModule, DriversModule, PassengersModule, TripsModule, ReceiptsModule],
  // controllers: [AppController],
  // providers: [AppService],
})

export class AppModule { }
