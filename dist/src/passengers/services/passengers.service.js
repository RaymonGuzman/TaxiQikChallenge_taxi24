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
exports.PassengersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../database/database.service");
let PassengersService = class PassengersService {
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        const passengers = this.db.passenger.findMany();
        return passengers;
    }
    async findOne(id) {
        const passenger = await this.db.passenger.findUnique({
            where: { id }
        });
        return passenger;
    }
    async create(passenger) {
        return this.db.passenger.create({
            data: {
                firstName: passenger.firstName,
                lastName: passenger.lastName,
                email: passenger.email,
                phone: passenger.phone,
                document: passenger.document,
                documentType: passenger.documentType
            },
        });
    }
};
exports.PassengersService = PassengersService;
exports.PassengersService = PassengersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], PassengersService);
//# sourceMappingURL=passengers.service.js.map