"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const doctor_controller_1 = require("./doctor.controller");
const mongoose_1 = require("@nestjs/mongoose");
const doctor_dto_1 = require("./dto/doctor.dto");
const response_handler_service_1 = require("../../utils/response-handler/response-handler.service");
let DoctorModule = class DoctorModule {
};
DoctorModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: doctor_dto_1.Doctor.name,
                    schema: doctor_dto_1.DoctorSchema
                }])],
        providers: [doctor_service_1.DoctorService, response_handler_service_1.ResponseHandlerService],
        controllers: [doctor_controller_1.DoctorController]
    })
], DoctorModule);
exports.DoctorModule = DoctorModule;
//# sourceMappingURL=doctor.module.js.map