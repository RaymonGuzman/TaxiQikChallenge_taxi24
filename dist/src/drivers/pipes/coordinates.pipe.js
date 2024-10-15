"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatesValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const driver_dto_1 = require("../dtos/driver.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let CoordinatesValidationPipe = class CoordinatesValidationPipe {
    async transform(value) {
        const coordinates = (0, class_transformer_1.plainToClass)(driver_dto_1.CoordinatesQuery, value);
        const errors = await (0, class_validator_1.validate)(coordinates);
        if (errors.length > 0) {
            throw new common_1.BadRequestException({ errors });
        }
        return coordinates;
    }
};
exports.CoordinatesValidationPipe = CoordinatesValidationPipe;
exports.CoordinatesValidationPipe = CoordinatesValidationPipe = __decorate([
    (0, common_1.Injectable)()
], CoordinatesValidationPipe);
//# sourceMappingURL=coordinates.pipe.js.map