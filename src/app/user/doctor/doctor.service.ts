import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './dto/doctor.dto';

@Injectable()
export class DoctorService {
    constructor(@InjectModel(Doctor.name) private DoctorModel: Model<DoctorDocument>) { }

    async getDoctor(): Promise<any> {
        let countDocuments = await this.DoctorModel.countDocuments({});
        let limit = 10,
            page = 1;
        return {
            total: countDocuments,
            page: page,
            limit: limit,
            body: await this.DoctorModel.find({}).select("-__v -_id").skip((limit * (page - 1))).limit(limit).exec()
        }
    }

    async createDoctor(body: Doctor): Promise<any> {
        let newDoctor = new this.DoctorModel(body);
        newDoctor.name = newDoctor.prefix + " " + newDoctor.firstName + " " + newDoctor.surname + " " + newDoctor.lastName;
        newDoctor.bName = newDoctor.bPrefix + " " + newDoctor.bFirstName + " " + newDoctor.bLastName;
        newDoctor.id = newDoctor._id;
        let doctor = newDoctor.save();
        return doctor;
    }

    async updateDoctor(updateDr: Doctor): Promise<any> {
        let { id, ...body } = updateDr;
        if (body.prefix || body.firstName || body.surname || body.lastName) {
            body.name = body.prefix + " " + body.firstName + " " + body.surname + " " + body.lastName;
        }
        if (body.bPrefix || body.bFirstName || body.bLastName) {
            body.bName = body.bPrefix + " " + body.bFirstName + " " + body.bLastName;
        }

        return this.DoctorModel.updateOne({ id: id }, { $set: body });

    }
}
