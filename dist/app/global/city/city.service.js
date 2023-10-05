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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const city_dto_1 = require("./dto/city.dto");
let CityService = class CityService {
    constructor(CityModel) {
        this.CityModel = CityModel;
    }
    async getCity() {
        return await this.CityModel.find().select("-_id -__v").sort({ name: -1 }).exec();
    }
    async addCity(body) {
        let newCity = new this.CityModel(body);
        newCity.id = newCity._id;
        return await newCity.save();
    }
    async bulkAdd(citys) {
        let listItem = [];
        for (let i = 0; i < citys.length; i++) {
            let item = new this.CityModel(citys[i]);
            item.id = item._id;
            listItem.push(await item.save());
        }
        return listItem;
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(city_dto_1.City.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map