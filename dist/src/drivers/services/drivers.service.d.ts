import { DatabaseService } from '../../database/database.service';
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto';
import { Driver, DriverStatus } from '@prisma/client';
export declare class DriversService {
    private db;
    constructor(db: DatabaseService);
    findAll(status?: DriverStatus | undefined): Promise<Driver[]>;
    findById(id: number): Promise<Driver | null>;
    findNearby(coordinates: CoordinatesQuery): Promise<Driver[]>;
    create(driver: CreateDriverDto): Promise<Driver>;
}
