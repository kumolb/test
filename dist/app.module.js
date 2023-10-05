"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./app/db/database/database.module");
const doctor_module_1 = require("./app/user/doctor/doctor.module");
const city_module_1 = require("./app/global/city/city.module");
const degree_module_1 = require("./app/global/degree/degree.module");
const user_module_1 = require("./app/user/user/user.module");
const response_handler_service_1 = require("./app/utils/response-handler/response-handler.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, city_module_1.CityModule, degree_module_1.DegreeModule, doctor_module_1.DoctorModule, user_module_1.UserModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, response_handler_service_1.ResponseHandlerService],
        exports: [database_module_1.DatabaseModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map