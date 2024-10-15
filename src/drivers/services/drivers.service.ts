import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../../database/database.service'
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto'
import { Driver, DriverStatus } from '@prisma/client'
import { Geo } from '../../utils/geo.utils'

@Injectable()
export class DriversService {
  constructor(private db: DatabaseService) { }

  async findAll(status: DriverStatus | undefined = undefined): Promise<Driver[]> {
    const drivers = await this.db.driver.findMany({
      where: { status },
      include: {
        company: false,
        vehicle: true,
        trips: true
      }
    })

    return drivers
  }

  async findById(id: number): Promise<Driver | null> {
    const driver = await this.db.driver.findUnique({
      where: { id },
      include: {
        company: true, vehicle: { include: { brand: true } }
      }
    })

    return driver
  }

  async findNearby(coordinates: CoordinatesQuery): Promise<Driver[]> {
    const { latitude, longitude, distance } = coordinates
    // const prisma = new PrismaClient();
    // console.log(`latitude ${latitude}, longitude ${longitude}, distance = ${distance} limit ${limit}`);

    const drivers = await this.db.driver.findMany();
    const filterDrivers= drivers.filter( driver => Geo.calculateDistance(latitude,longitude, driver.currentLat!, driver.currentLon!) < 3);

    // const mapDrivers = drivers.map( driver => ({...driver, valor:Geo.calcularDistancia(latitude,longitude, driver.currentLat!, driver.currentLon!)}));
    // console.log(mapDrivers);

    return filterDrivers;
  }

  async create(driver: CreateDriverDto): Promise<Driver> {
    return this.db.driver.create({
      data: {
        firstName: driver.firstName,
        lastName: driver.lastName,
        email: driver.email,
        phone: driver.phone,
        companyId: driver.companyId,
        document: driver.document,
        documentType: driver.documentType,
        currentLat: driver.currentLat,
        currentLon: driver.currentLon,
        status: driver.status as DriverStatus,
        vehicleId: driver.vehicleId
      },
    })
  }
}