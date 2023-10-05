import { Module } from '@nestjs/common';
import { ChamberController } from './chamber.controller';
import { ChamberService } from './chamber.service';

@Module({
  controllers: [ChamberController],
  providers: [ChamberService]
})
export class ChamberModule {}
