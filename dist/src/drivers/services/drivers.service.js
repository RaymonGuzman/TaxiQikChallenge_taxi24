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
exports.DriversService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
const geo_utils_1 = require("../../utils/geo.utils");
let DriversService = class DriversService {
    constructor(db) {
        this.db = db;
    }
    async findAll(status = undefined) {
        const drivers = await this.db.driver.findMany({
            where: { status },
            include: {
                company: false,
                vehicle: true,
                trips: true
            }
        });
        return drivers;
    }
    async findById(id) {
        const driver = await this.db.driver.findUnique({
            where: { id },
            include: {
                company: true, vehicle: { include: { brand: true } }
            }
        });
        return driver;
    }
    async findNearby(coordinates) {
        const { latitude, longitude, distance } = coordinates;
        const drivers = await this.db.driver.findMany();
        const filterDrivers = drivers.filter(driver => geo_utils_1.Geo.calculateDistance(latitude, longitude, driver.currentLat, driver.currentLon) < 3);
        return filterDrivers;
    }
    async create(driver) {
        return this.db.driver.create({
            data: {
                firstName: driver.firstName,
                lastName: driver.lastName,
                email: driver.email,
                phone: driver.phone,
                companyId: driver.companyId,
                document: driver.document,
                documentType: driver.documentType,
                currentLat: driver.currentLat,
                currentLon: driver.currentLon,
                status: driver.status,
                vehicleId: driver.vehicleId
            },
        });
    }
};
exports.DriversService = DriversService;
exports.DriversService = DriversService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DriversService);
//# sourceMappingURL=drivers.service.js.map