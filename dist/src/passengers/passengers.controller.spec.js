"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const passengers_controller_1 = require("./passengers.controller");
describe('PassengersController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [passengers_controller_1.PassengersController],
        }).compile();
        controller = module.get(passengers_controller_1.PassengersController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=passengers.controller.spec.js.map