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
exports.DegreeController = void 0;
const common_1 = require("@nestjs/common");
const degree_service_1 = require("./degree.service");
const degree_dto_1 = require("./dto/degree.dto");
let DegreeController = class DegreeController {
    constructor(degreeService) {
        this.degreeService = degreeService;
    }
    async getDegree() {
        return this.degreeService.getDegree();
    }
    async createDegree(body) {
        return this.degreeService.addDegree(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DegreeController.prototype, "getDegree", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [degree_dto_1.Degree]),
    __metadata("design:returntype", Promise)
], DegreeController.prototype, "createDegree", null);
DegreeController = __decorate([
    (0, common_1.Controller)('degree'),
    __metadata("design:paramtypes", [degree_service_1.DegreeService])
], DegreeController);
exports.DegreeController = DegreeController;
//# sourceMappingURL=degree.controller.js.map