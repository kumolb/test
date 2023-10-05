import { DoctorService } from './doctor.service';
import { Doctor } from './dto/doctor.dto';
import { Response } from "express";
import { ResponseHandlerService } from 'src/app/utils/response-handler/response-handler.service';
export declare class DoctorController {
    private readonly doctorService;
    private readonly responseService;
    constructor(doctorService: DoctorService, responseService: ResponseHandlerService);
    getDoctor(res: Response): Promise<any>;
    createNewDoctor(doctor: Doctor, res: Response): Promise<any>;
    updateDoctor(doctor: Doctor, res: Response): Promise<any>;
}
