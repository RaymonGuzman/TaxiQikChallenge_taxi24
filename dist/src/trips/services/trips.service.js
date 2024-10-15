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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
const client_1 = require("@prisma/client");
let TripsService = class TripsService {
    constructor(db) {
        this.db = db;
    }
    async findByStatus(status) {
        return this.db.trip.findMany({
            where: { status: { in: status } }
        });
    }
    async findOne(id) {
        return this.db.trip.findUnique({ where: { id } });
    }
    async request(data) {
        return this.db.trip.create({ data: { ...data, status: client_1.TripsStatus.REQUESTED } });
    }
    async updateStatus(id, status) {
        const trip = await this.db.trip.findUnique({ where: { id } });
        if (!trip) {
            throw new common_1.NotFoundException(`Trip ID ${id} not found`);
        }
        const data = {};
        if (trip.status === client_1.TripsStatus.REQUESTED && status === client_1.TripsStatus.IN_PROGRESS) {
            data.startedAt = new Date();
        }
        if (trip.status === client_1.TripsStatus.IN_PROGRESS && status === client_1.TripsStatus.COMPLETED) {
            data.endedAt = new Date();
        }
        if (trip.status === client_1.TripsStatus.REQUESTED && status === client_1.TripsStatus.CANCELLED) {
            data.cancelledAt = new Date();
        }
        if (Object.keys(data).length === 0) {
            throw new common_1.BadRequestException('Invalid status change');
        }
        return this.db.trip.update({
            where: { id },
            data: { ...data, status }
        });
    }
};
exports.TripsService = TripsService;
exports.TripsService = TripsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TripsService);
//# sourceMappingURL=trips.service.js.map