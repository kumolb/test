import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserD, UserDocument } from './dto/user.dto';
import { ResponseHandlerService } from 'src/app/utils/response-handler/response-handler.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: UserD.name,
      schema: UserDocument
    }])
  ],
  controllers: [UserController],
  providers: [UserService, ResponseHandlerService]
})
export class UserModule { }
