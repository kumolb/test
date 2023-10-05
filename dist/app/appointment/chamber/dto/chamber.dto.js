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
exports.ChamberDocument = exports.Chamber = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Chamber = class Chamber {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chamber.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chamber.prototype, "organizationId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chamber.prototype, "details", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Chamber.prototype, "monthly", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{
                day: String,
                startTime: String,
                endTime: String,
                maxAppointment: Number
            }]
    }),
    __metadata("design:type", Array)
], Chamber.prototype, "schedule", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Chamber.prototype, "maxAppointment", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chamber.prototype, "town", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chamber.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chamber.prototype, "address", void 0);
Chamber = __decorate([
    (0, mongoose_1.Schema)()
], Chamber);
exports.Chamber = Chamber;
exports.ChamberDocument = mongoose_1.SchemaFactory.createForClass(Chamber);
//# sourceMappingURL=chamber.dto.js.map