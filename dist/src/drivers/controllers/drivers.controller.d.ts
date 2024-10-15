import { DriversService } from '../services/drivers.service';
import { CoordinatesQuery, CreateDriverDto } from '../dtos/driver.dto';
import { DriverStatus } from '@prisma/client';
export declare class DriversController {
    private readonly driverService;
    constructor(driverService: DriversService);
    findAll(status?: DriverStatus): Promise<{
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
    findNearby(coordinates: CoordinatesQuery): Promise<{
        driver: {
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
        driver: {
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
        } | null;
    }>;
    create(input: CreateDriverDto): Promise<{
        driver: {
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
        };
    }>;
}
