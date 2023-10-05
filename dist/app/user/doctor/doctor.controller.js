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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const doctor_dto_1 = require("./dto/doctor.dto");
const response_handler_service_1 = require("../../utils/response-handler/response-handler.service");
let DoctorController = class DoctorController {
    constructor(doctorService, responseService) {
        this.doctorService = doctorService;
        this.responseService = responseService;
    }
    async getDoctor(res) {
        try {
            let { total, limit, page, body } = await this.doctorService.getDoctor();
            return this.responseService.success(res, "", body, { body, page, limit, total });
        }
        catch (err) {
            return res.json({
                statusCode: common_1.HttpStatus.EXPECTATION_FAILED,
                error: err.stack
            });
        }
    }
    async createNewDoctor(doctor, res) {
        try {
            let data = await this.doctorService.createDoctor(doctor);
            return this.responseService.success(res, "", data, {});
        }
        catch (err) {
            return res.json({
                statusCode: common_1.HttpStatus.EXPECTATION_FAILED,
                error: err.stack
            });
        }
    }
    async updateDoctor(doctor, res) {
        try {
            let data = await this.doctorService.updateDoctor(doctor);
            return this.responseService.success(res, "", data, {});
        }
        catch (err) {
            return res.json({
                statusCode: common_1.HttpStatus.EXPECTATION_FAILED,
                error: err.stack
            });
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctor", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_dto_1.Doctor, Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "createNewDoctor", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_dto_1.Doctor, Object]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateDoctor", null);
DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService, response_handler_service_1.ResponseHandlerService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map