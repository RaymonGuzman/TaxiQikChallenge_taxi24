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
exports.DriversController = void 0;
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("../services/drivers.service");
const driver_dto_1 = require("../dtos/driver.dto");
const coordinates_pipe_1 = require("../pipes/coordinates.pipe");
const client_1 = require("@prisma/client");
let DriversController = class DriversController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    async findAll(status) {
        const drivers = await this.driverService.findAll(status);
        return { drivers };
    }
    async findNearby(coordinates) {
        const driver = await this.driverService.findNearby(coordinates);
        return { driver };
    }
    async findOne(id) {
        const driver = await this.driverService.findById(id);
        return { driver };
    }
    async create(input) {
        const driver = await this.driverService.create({ ...input });
        return { driver };
    }
};
exports.DriversController = DriversController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status', new common_1.ParseEnumPipe({ ...client_1.DriverStatus, undefined }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('nearby'),
    __param(0, (0, common_1.Query)(new coordinates_pipe_1.CoordinatesValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_dto_1.CoordinatesQuery]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "findNearby", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_dto_1.CreateDriverDto]),
    __metadata("design:returntype", Promise)
], DriversController.prototype, "create", null);
exports.DriversController = DriversController = __decorate([
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [drivers_service_1.DriversService])
], DriversController);
//# sourceMappingURL=drivers.controller.js.map