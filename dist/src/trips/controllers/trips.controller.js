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
exports.TripsController = void 0;
const common_1 = require("@nestjs/common");
const trips_dto_1 = require("../dtos/trips.dto");
const client_1 = require("@prisma/client");
const status_pipe_1 = require("../pipes/status.pipe");
const trips_service_1 = require("../services/trips.service");
let TripsController = class TripsController {
    constructor(tripService) {
        this.tripService = tripService;
    }
    async findByStatus(status) {
        const trips = await this.tripService.findByStatus(status);
        return { trips };
    }
    async findOne(id) {
        const trip = await this.tripService.findOne(id);
        return { trip };
    }
    async create(input) {
        const trip = await this.tripService.request(input);
        return { trip };
    }
    async updateStatus(id, status) {
        const trip = await this.tripService.updateStatus(id, status);
        return { trip };
    }
};
exports.TripsController = TripsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status', new status_pipe_1.TripsStatusArrayPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('request'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trips_dto_1.CreateTripDto]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id/:status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('status', new common_1.ParseEnumPipe(client_1.TripsStatus))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "updateStatus", null);
exports.TripsController = TripsController = __decorate([
    (0, common_1.Controller)('trips'),
    __metadata("design:paramtypes", [trips_service_1.TripsService])
], TripsController);
//# sourceMappingURL=trips.controller.js.map