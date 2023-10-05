import { Body, Controller, Get, Post } from '@nestjs/common';
import { DegreeService } from './degree.service';
import { Degree } from './dto/degree.dto';

@Controller('degree')
export class DegreeController {
    constructor(private readonly degreeService: DegreeService) { }
    @Get()
    async getDegree(): Promise<Degree[]> {
        return this.degreeService.getDegree();
    }

    @Post()
    async createDegree(@Body() body: Degree): Promise<Degree> {
        return this.degreeService.addDegree(body);
    }
}
