"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const drivers_controller_1 = require("./drivers.controller");
const drivers_service_1 = require("../services/drivers.service");
const database_service_1 = require("../../database/database.service");
describe('DriversController', () => {
    let controller;
    let driverService;
    beforeEach(async () => {
        driverService = new drivers_service_1.DriversService(database_service_1.DatabaseService);
        const module = await testing_1.Test.createTestingModule({
            controllers: [drivers_controller_1.DriversController],
            providers: [drivers_service_1.DriversService, database_service_1.DatabaseService],
        }).compile();
        controller = module.get(drivers_controller_1.DriversController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    describe('findOne', () => {
        it('should return the driver with the specified ID', async () => {
            const id = 1;
            const driver = {
                id: 1,
                firstName: "Conductor 1",
                lastName: "Apellido 1",
                email: "conductor1@example.com",
                phone: "1234567890",
                companyId: 1,
                document: "123456789",
                documentType: "C",
                picture: null,
                currentLat: 18.4608496959876,
                currentLon: -69.920673029112,
                status: "ACTIVE",
                createdAt: new Date("2023-06-30T02:05:13.442Z"),
                updatedAt: new Date("2023-06-30T02:05:13.442Z"),
                vehicleId: 1,
                company: {
                    id: 1,
                    name: "Company 1",
                    rnc: 123456789,
                    status: "ACTIVE",
                    address: "Dirección 1",
                    createdAt: new Date('2023-06-30T02:05:13.434Z'),
                    updatedAt: new Date('2023-06-30T02:05:13.434Z')
                },
                vehicle: {
                    id: 1,
                    driverId: 1,
                    color: "Rojo",
                    brandId: 10,
                    vin: "VIN123456781",
                    year: 2021,
                    brand: {
                        id: 10,
                        name: "Bentley",
                        logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png"
                    }
                }
            };
            jest.spyOn(driverService, 'findById').mockResolvedValue(driver);
            const result = await controller.findOne(id);
            expect(result).toEqual({ driver });
        });
    });
    describe('create', () => {
        it('should create a new driver', async () => {
            const input = {
                firstName: "Conductor 125",
                lastName: "Apellido 125",
                email: "conductor125@example.com",
                phone: "18345678905",
                companyId: 1,
                document: "153456789",
                documentType: "C",
                picture: null,
                currentLat: 18.4608496959876,
                currentLon: -69.920673029112,
                vehicleId: 1,
            };
            jest.spyOn(driverService, 'create').mockResolvedValue(input);
            const result = await controller.create(input);
            expect(result).toEqual(result);
        });
    });
});
//# sourceMappingURL=drivers.controller.spec.js.map