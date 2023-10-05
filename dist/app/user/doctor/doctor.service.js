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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const doctor_dto_1 = require("./dto/doctor.dto");
let DoctorService = class DoctorService {
    constructor(DoctorModel) {
        this.DoctorModel = DoctorModel;
    }
    async getDoctor() {
        let countDocuments = await this.DoctorModel.countDocuments({});
        let limit = 10, page = 1;
        return {
            total: countDocuments,
            page: page,
            limit: limit,
            body: await this.DoctorModel.find({}).select("-__v -_id").skip((limit * (page - 1))).limit(limit).exec()
        };
    }
    async createDoctor(body) {
        let newDoctor = new this.DoctorModel(body);
        newDoctor.name = newDoctor.prefix + " " + newDoctor.firstName + " " + newDoctor.surname + " " + newDoctor.lastName;
        newDoctor.bName = newDoctor.bPrefix + " " + newDoctor.bFirstName + " " + newDoctor.bLastName;
        newDoctor.id = newDoctor._id;
        let doctor = newDoctor.save();
        return doctor;
    }
    async updateDoctor(updateDr) {
        let { id } = updateDr, body = __rest(updateDr, ["id"]);
        if (body.prefix || body.firstName || body.surname || body.lastName) {
            body.name = body.prefix + " " + body.firstName + " " + body.surname + " " + body.lastName;
        }
        if (body.bPrefix || body.bFirstName || body.bLastName) {
            body.bName = body.bPrefix + " " + body.bFirstName + " " + body.bLastName;
        }
        return this.DoctorModel.updateOne({ id: id }, { $set: body });
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(doctor_dto_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map