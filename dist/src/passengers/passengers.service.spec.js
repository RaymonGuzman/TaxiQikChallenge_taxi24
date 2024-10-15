"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const passengers_service_1 = require("./passengers.service");
describe('PassengersService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [passengers_service_1.PassengersService],
        }).compile();
        service = module.get(passengers_service_1.PassengersService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=passengers.service.spec.js.map