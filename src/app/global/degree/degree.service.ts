import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Degree, DegreeDocument } from './dto/degree.dto';

@Injectable()
export class DegreeService {
    constructor(@InjectModel(Degree.name) private DegreeModel: Model<DegreeDocument>) { }

    async getDegree(): Promise<Degree[]> {
        return this.DegreeModel.find({}).select("-_id -__v").sort({ title: 1 }).lean().exec();
    }

    async addDegree(props: Degree): Promise<Degree> {
        // console.log(props);
        let degree = new this.DegreeModel(props);
        degree.id = degree._id;
        return await degree.save();
    }
}
