import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './dto/doctor.dto';
export declare class DoctorService {
    private DoctorModel;
    constructor(DoctorModel: Model<DoctorDocument>);
    getDoctor(): Promise<any>;
    createDoctor(body: Doctor): Promise<any>;
    updateDoctor(updateDr: Doctor): Promise<any>;
}
