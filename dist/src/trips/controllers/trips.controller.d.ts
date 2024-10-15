import { CreateTripDto } from '@trips/dtos/trips.dto';
import { TripsStatus } from '@prisma/client';
import { TripsService } from '../services/trips.service';
export declare class TripsController {
    private readonly tripService;
    constructor(tripService: TripsService);
    findByStatus(status: TripsStatus[]): Promise<{
        trips: {
            id: number;
            createdAt: Date;
            driverId: number;
            passengerId: number;
            status: import(".prisma/client").$Enums.TripsStatus;
            fromLatitude: number;
            fromLongitude: number;
            toLatitude: number;
            toLongitude: number;
            startedAt: Date | null;
            endedAt: Date | null;
            cancelledAt: Date | null;
        }[];
    }>;
    findOne(id: number): Promise<{
        trip: {
            id: number;
            createdAt: Date;
            driverId: number;
            passengerId: number;
            status: import(".prisma/client").$Enums.TripsStatus;
            fromLatitude: number;
            fromLongitude: number;
            toLatitude: number;
            toLongitude: number;
            startedAt: Date | null;
            endedAt: Date | null;
            cancelledAt: Date | null;
        } | null;
    }>;
    create(input: CreateTripDto): Promise<{
        trip: {
            id: number;
            createdAt: Date;
            driverId: number;
            passengerId: number;
            status: import(".prisma/client").$Enums.TripsStatus;
            fromLatitude: number;
            fromLongitude: number;
            toLatitude: number;
            toLongitude: number;
            startedAt: Date | null;
            endedAt: Date | null;
            cancelledAt: Date | null;
        };
    }>;
    updateStatus(id: number, status: TripsStatus): Promise<{
        trip: {
            id: number;
            createdAt: Date;
            driverId: number;
            passengerId: number;
            status: import(".prisma/client").$Enums.TripsStatus;
            fromLatitude: number;
            fromLongitude: number;
            toLatitude: number;
            toLongitude: number;
            startedAt: Date | null;
            endedAt: Date | null;
            cancelledAt: Date | null;
        };
    }>;
}
