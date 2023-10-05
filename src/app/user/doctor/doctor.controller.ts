import { Controller, Get, Post, Body, Res, HttpStatus, Put } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './dto/doctor.dto';
import { Response } from "express";
import { ResponseHandlerService } from 'src/app/utils/response-handler/response-handler.service';
@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService, private readonly responseService: ResponseHandlerService) { }
    @Get()
    async getDoctor(@Res() res: Response): Promise<any> {
        try {
            let { total, limit, page, body } = await this.doctorService.getDoctor()
            return this.responseService.success(res, "", body, { body, page, limit, total })
            // res.json({
            //     statusCode: HttpStatus.OK,
            //     ...await this.doctorService.getDoctor()
            // })
        } catch (err) {
            return res.json({
                statusCode: HttpStatus.EXPECTATION_FAILED,
                error: err.stack
            })
        }
        // return {

        // }
    }

    @Post()
    async createNewDoctor(@Body() doctor: Doctor, @Res() res: Response): Promise<any> {
        try {
            let data = await this.doctorService.createDoctor(doctor);
            return this.responseService.success(res, "", data, {});
        } catch (err) {
            return res.json({
                statusCode: HttpStatus.EXPECTATION_FAILED,
                error: err.stack
            })
        }
    }

    @Put()
    async updateDoctor(@Body() doctor: Doctor, @Res() res: Response): Promise<any> {
        try {
            let data = await this.doctorService.updateDoctor(doctor);
            return this.responseService.success(res, "", data, {});
        } catch (err) {
            return res.json({
                statusCode: HttpStatus.EXPECTATION_FAILED,
                error: err.stack
            })
        }
    }

}
