import { Body, Controller, Get, Post } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './dto/city.dto';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) { }
    @Get()
    async getCity(): Promise<City[]> {
        return await this.cityService.getCity();
    }

    // @Post()
    // async createCity(@Body() property: City[]): Promise<City[]> {
    //     return await this.cityService.addCity(property);
    // }

    @Post()
    async createCity(@Body() body: City): Promise<City> {
        return await this.cityService.addCity(body);
    }

    @Post("/bulk")
    async createBulk(@Body() body: City[]): Promise<City[]> {
        return await this.cityService.bulkAdd(body);
    }
}
