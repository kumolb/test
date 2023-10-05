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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorSchema = exports.Doctor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Doctor = class Doctor {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "surname", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: "DR."
    }),
    __metadata("design:type", String)
], Doctor.prototype, "prefix", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: "ডাঃ"
    }),
    __metadata("design:type", String)
], Doctor.prototype, "bPrefix", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "bFirstName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "bLastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "bName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "contactNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "specialty", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        type: [{
                position: { type: String },
                department: { type: String },
                startDate: { type: String },
                endDate: { type: String },
                years: Number,
                organization: String
            }]
    }),
    __metadata("design:type", Array)
], Doctor.prototype, "experience", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{
                title: { type: String },
                details: { type: String },
                institute: { type: String },
                country: { type: String },
                subject: { type: String }
            }]
    }),
    __metadata("design:type", Array)
], Doctor.prototype, "degrees", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        default: []
    }),
    __metadata("design:type", Array)
], Doctor.prototype, "chamberOrgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "" }),
    __metadata("design:type", String)
], Doctor.prototype, "organizationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        default: []
    }),
    __metadata("design:type", Array)
], Doctor.prototype, "chamber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "birthDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Doctor.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false
    }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "isEmailVerified", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false
    }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "isContactVerified", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            createdAt: String,
            otp: String,
            isUsed: Boolean
        },
        default: {
            createdAt: "String",
            otp: "String",
            isUsed: false
        }
    }),
    __metadata("design:type", Object)
], Doctor.prototype, "otp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "" }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "isAvailable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "" }),
    __metadata("design:type", String)
], Doctor.prototype, "details", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Doctor.prototype, "visitingCard", void 0);
Doctor = __decorate([
    (0, mongoose_1.Schema)()
], Doctor);
exports.Doctor = Doctor;
exports.DoctorSchema = mongoose_1.SchemaFactory.createForClass(Doctor);
//# sourceMappingURL=doctor.dto.js.map