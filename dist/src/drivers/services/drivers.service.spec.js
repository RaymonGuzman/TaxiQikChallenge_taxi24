"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const drivers_service_1 = require("./drivers.service");
const database_service_1 = require("../../database/database.service");
describe('DriversService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [drivers_service_1.DriversService, database_service_1.DatabaseService],
        }).compile();
        service = module.get(drivers_service_1.DriversService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=drivers.service.spec.js.map