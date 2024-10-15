import { Test, TestingModule, } from '@nestjs/testing'
import { TripsService } from '../services/trips.service'
import { TripsController } from './trips.controller'
import { DatabaseService } from '../../database/database.service'

describe('TripsController', () => {
  let controller: TripsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsController],
      providers: [TripsService, DatabaseService],
    }).compile()

    controller = module.get<TripsController>(TripsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
