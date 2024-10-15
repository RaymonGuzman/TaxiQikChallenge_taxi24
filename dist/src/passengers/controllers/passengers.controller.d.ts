import { DriversService } from '../../drivers/services/drivers.service';
import { PassengersService } from '../services/passengers.service';
import { CreatePassengerDto } from '../../passengers/dtos/passenger.dto';
import { CoordinatesQuery } from '../../drivers/dtos/driver.dto';
export declare class PassengersController {
    private readonly passengersService;
    private readonly driversService;
    constructor(passengersService: PassengersService, driversService: DriversService);
    findAll(): Promise<{
        passengers: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            document: string;
            documentType: import(".prisma/client").$Enums.DocumentTypes;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
    requestTrip(coordinates: CoordinatesQuery): Promise<{
        drivers: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            companyId: number;
            document: string;
            documentType: string;
            picture: string | null;
            currentLat: number | null;
            currentLon: number | null;
            status: import(".prisma/client").$Enums.DriverStatus;
            createdAt: Date;
            updatedAt: Date | null;
            vehicleId: number | null;
        }[];
    }>;
    findOne(id: number): Promise<{
        trip: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            document: string;
            documentType: import(".prisma/client").$Enums.DocumentTypes;
            createdAt: Date;
            updatedAt: Date | null;
        } | null;
    }>;
    create(input: CreatePassengerDto): Promise<{
        createPassenger: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            document: string;
            documentType: import(".prisma/client").$Enums.DocumentTypes;
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
}
