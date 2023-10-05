import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DegreeController } from './degree.controller';
import { DegreeService } from './degree.service';
import { Degree, DegreeSchema } from './dto/degree.dto';

@Module({
  controllers: [DegreeController],
  providers: [DegreeService],
  imports: [MongooseModule.forFeature([{
    name: Degree.name, schema: DegreeSchema
  }])]
})
export class DegreeModule { }
