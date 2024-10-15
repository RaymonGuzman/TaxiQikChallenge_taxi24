import { DatabaseService } from '../../database/database.service';
import { Passenger } from '@prisma/client';
import { CreatePassengerDto } from '../../passengers/dtos/passenger.dto';
export declare class PassengersService {
    private db;
    constructor(db: DatabaseService);
    findAll(): Promise<Passenger[]>;
    findOne(id: number): Promise<Passenger | null>;
    create(passenger: CreatePassengerDto): Promise<Passenger>;
}
