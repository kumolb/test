import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from './dto/doctor.dto';
import { ResponseHandlerService } from 'src/app/utils/response-handler/response-handler.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Doctor.name,
    schema: DoctorSchema
  }])],
  providers: [DoctorService, ResponseHandlerService],
  controllers: [DoctorController]
})
export class DoctorModule { }
