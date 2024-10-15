import { DriverStatus } from '@prisma/client';
export declare class CoordinatesQuery {
    latitude: number;
    longitude: number;
    distance: number;
}
export declare class CreateDriverDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyId: number;
    document: string;
    documentType: string;
    picture?: string;
    currentLat: number;
    currentLon: number;
    status?: DriverStatus;
    vehicleId?: number;
}
