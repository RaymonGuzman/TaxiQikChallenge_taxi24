import { DatabaseService } from '../../database/database.service';
import { Trip, TripsStatus } from '@prisma/client';
import { CreateTripDto } from '@trips/dtos/trips.dto';
export declare class TripsService {
    private db;
    constructor(db: DatabaseService);
    findByStatus(status: TripsStatus[]): Promise<Trip[]>;
    findOne(id: number): Promise<Trip | null>;
    request(data: CreateTripDto): Promise<Trip>;
    updateStatus(id: number, status: TripsStatus): Promise<Trip>;
}
