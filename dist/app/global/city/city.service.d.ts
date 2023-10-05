import { Model } from 'mongoose';
import { City, CityDocument } from './dto/city.dto';
export declare class CityService {
    private CityModel;
    constructor(CityModel: Model<CityDocument>);
    getCity(): Promise<City[]>;
    addCity(body: City): Promise<City>;
    bulkAdd(citys: City[]): Promise<City[]>;
}
