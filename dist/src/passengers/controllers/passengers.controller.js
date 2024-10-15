"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengersController = void 0;
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("../../drivers/services/drivers.service");
const coordinates_pipe_1 = require("../../drivers/pipes/coordinates.pipe");
const passengers_service_1 = require("../services/passengers.service");
const passenger_dto_1 = require("../../passengers/dtos/passenger.dto");
const driver_dto_1 = require("../../drivers/dtos/driver.dto");
let PassengersController = class PassengersController {
    constructor(passengersService, driversService) {
        this.passengersService = passengersService;
        this.driversService = driversService;
    }
    async findAll() {
        const passengers = await this.passengersService.findAll();
        return { passengers };
    }
    async requestTrip(coordinates) {
        const drivers = await this.driversService.findNearby(coordinates);
        return { drivers };
    }
    async findOne(id) {
        const trip = await this.passengersService.findOne(id);
        return { trip };
    }
    async create(input) {
        const createPassenger = await this.passengersService.create({ ...input });
        return { createPassenger };
    }
};
exports.PassengersController = PassengersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('trip'),
    __param(0, (0, common_1.Query)(new coordinates_pipe_1.CoordinatesValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_dto_1.CoordinatesQuery]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "requestTrip", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passenger_dto_1.CreatePassengerDto]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "create", null);
exports.PassengersController = PassengersController = __decorate([
    (0, common_1.Controller)('passengers'),
    __metadata("design:paramtypes", [passengers_service_1.PassengersService,
        drivers_service_1.DriversService])
], PassengersController);
//# sourceMappingURL=passengers.controller.js.map