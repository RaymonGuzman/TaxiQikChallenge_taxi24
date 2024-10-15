import { Module } from '@nestjs/common'
import { DriversService } from './services/drivers.service'
import { DriversController } from './controllers/drivers.controller'
import { DatabaseModule } from '../database/database.module'

@Module({
  providers: [DriversService],
  controllers: [DriversController],
  exports: [DriversService],
  imports: [DatabaseModule],
})

export class DriversModule { }
