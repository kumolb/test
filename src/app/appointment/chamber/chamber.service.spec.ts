import { Test, TestingModule } from '@nestjs/testing';
import { ChamberService } from './chamber.service';

describe('ChamberService', () => {
  let service: ChamberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChamberService],
    }).compile();

    service = module.get<ChamberService>(ChamberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
