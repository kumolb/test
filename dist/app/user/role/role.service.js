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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const role_dto_1 = require("./dto/role.dto");
const mongoose_2 = require("mongoose");
let RoleService = class RoleService {
    constructor(RoleModel) {
        this.RoleModel = RoleModel;
    }
    async createRole(role) {
        let roleId = await this.RoleModel.countDocuments({});
        let newRole = new this.RoleModel(role);
        newRole.id = roleId + 1;
        newRole = await newRole.save();
        return newRole;
    }
    async getRoles() {
        let roles = await this.RoleModel.find({}).select("-_id -_v").sort({ id: -1 }).lean();
        return roles;
    }
    async getRole(query) {
        let role = await this.RoleModel.findOne(query).select("-_id -_v").lean();
        return role;
    }
    async updateRole(id, updateRole) {
        let updated = await this.RoleModel.updateOne({ id: id }, { $set: updateRole });
        return updated;
    }
    async deleteRole(id, updateRole) {
        let deleted = await this.RoleModel.deleteOne({ id: id });
        return deleted;
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(role_dto_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map