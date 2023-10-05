import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from './dto/city.dto';

@Injectable()
export class CityService {
    constructor(@InjectModel(City.name) private CityModel: Model<CityDocument>) { }
    async getCity(): Promise<City[]> {
        return await this.CityModel.find().select("-_id -__v").sort({ name: -1 }).exec();
    }
    async addCity(body: City): Promise<City> {
        let newCity = new this.CityModel(body);
        newCity.id = newCity._id;
        return await newCity.save();
    }

    async bulkAdd(citys: City[]): Promise<City[]> {
        let listItem = [];
        for (let i = 0; i < citys.length; i++) {
            let item = new this.CityModel(citys[i]);
            item.id = item._id;
            listItem.push(await item.save());
        }
        return listItem;
    }
}
