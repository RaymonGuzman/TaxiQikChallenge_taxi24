"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const trips_service_1 = require("../services/trips.service");
const trips_controller_1 = require("./trips.controller");
const database_service_1 = require("../../database/database.service");
describe('TripsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [trips_controller_1.TripsController],
            providers: [trips_service_1.TripsService, database_service_1.DatabaseService],
        }).compile();
        controller = module.get(trips_controller_1.TripsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=trips.controller.spec.js.map