import { Test, TestingModule } from '@nestjs/testing';
import { ChamberController } from './chamber.controller';

describe('ChamberController', () => {
  let controller: ChamberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChamberController],
    }).compile();

    controller = module.get<ChamberController>(ChamberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
