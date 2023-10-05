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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const response_handler_service_1 = require("../../utils/response-handler/response-handler.service");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
let UserController = class UserController {
    constructor(responseService, userService) {
        this.responseService = responseService;
        this.userService = userService;
    }
    async getUser(req, res, query) {
        try {
            let userQuery = {}, page = query.page ? +(query.page - 1) : 0, limit = query.limit ? +(query.limit) : 10;
            let total = await this.userService.getUserCount(userQuery);
            let user = await this.userService.getAllUser(page, limit);
            return this.responseService.success(res, "", user, { total, page, limit });
        }
        catch (err) {
            return this.responseService.error(res, err);
        }
    }
    async getSingleUser(req, res, id) {
        try {
            let id = req.params.id;
            let user = await this.userService.getUserById(id);
            return this.responseService.ok(res, "", user);
        }
        catch (err) {
            return this.responseService.error(res, err);
        }
    }
    async createUser(body, req, res) {
        try {
            let user = await this.userService.createUser(body);
            return this.responseService.created(res, "", user);
        }
        catch (err) {
            return this.responseService.error(res, err);
        }
    }
    async deleteUser(req, res, id) {
        try {
            let id = req.params.id;
            let deleted = await this.userService.deleteUser(id);
            return this.responseService.ok(res, "", { deleted: "success" });
        }
        catch (err) {
            return this.responseService.error(res, err);
        }
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('byid/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSingleUser", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserD, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [response_handler_service_1.ResponseHandlerService, user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map