"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegreeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const degree_controller_1 = require("./degree.controller");
const degree_service_1 = require("./degree.service");
const degree_dto_1 = require("./dto/degree.dto");
let DegreeModule = class DegreeModule {
};
DegreeModule = __decorate([
    (0, common_1.Module)({
        controllers: [degree_controller_1.DegreeController],
        providers: [degree_service_1.DegreeService],
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: degree_dto_1.Degree.name, schema: degree_dto_1.DegreeSchema
                }])]
    })
], DegreeModule);
exports.DegreeModule = DegreeModule;
//# sourceMappingURL=degree.module.js.map