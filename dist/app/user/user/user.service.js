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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_dto_1 = require("./dto/user.dto");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async getUserCount(query) {
        return await this.UserModel.countDocuments(query);
    }
    async getAllUser(page, limit) {
        console.log(process.env.dburl);
        let users = await this.UserModel.find({}).sort({ _id: -1 }).skip(page).limit(limit).lean();
        return users;
    }
    async createUser(body) {
        let user = new this.UserModel(body);
        user.id = user._id;
        let newUser = await user.save();
        return newUser;
    }
    async deleteUser(id) {
        let deleted = await this.UserModel.deleteOne({ id: id });
        return deleted;
    }
    async getUserById(id) {
        let user = await this.UserModel.findOne({ id: id }).lean();
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_dto_1.UserD.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map