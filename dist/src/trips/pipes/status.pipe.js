"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsStatusArrayPipe = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TripsStatusArrayPipe = class TripsStatusArrayPipe {
    transform(value) {
        const values = value.split(',');
        const validStatusValues = Object.values(client_1.TripsStatus);
        for (const status of values) {
            if (!validStatusValues.includes(status)) {
                throw new common_1.BadRequestException(`Invalid status value: ${status}`);
            }
        }
        return values;
    }
};
exports.TripsStatusArrayPipe = TripsStatusArrayPipe;
exports.TripsStatusArrayPipe = TripsStatusArrayPipe = __decorate([
    (0, common_1.Injectable)()
], TripsStatusArrayPipe);
//# sourceMappingURL=status.pipe.js.map