export declare class CreateTripDto {
    driverId: number;
    passengerId: number;
    fromLatitude: number;
    fromLongitude: number;
    toLatitude: number;
    toLongitude: number;
}
export declare class UpdateTripStatusDto {
    startedAt?: Date;
    endedAt?: Date;
    cancelledAt?: Date;
}
