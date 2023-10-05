import { CityService } from './city.service';
import { City } from './dto/city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getCity(): Promise<City[]>;
    createCity(body: City): Promise<City>;
    createBulk(body: City[]): Promise<City[]>;
}
