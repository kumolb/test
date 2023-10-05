import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './app/db/database/database.module';
import { DoctorModule } from './app/user/doctor/doctor.module';
import { CityModule } from './app/global/city/city.module';
import { DegreeModule } from './app/global/degree/degree.module';
import { UserModule } from './app/user/user/user.module';
import { ResponseHandlerService } from './app/utils/response-handler/response-handler.service';
@Module({
  imports: [DatabaseModule, CityModule, DegreeModule, DoctorModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ResponseHandlerService],
  exports: [DatabaseModule]
})
export class AppModule { }
