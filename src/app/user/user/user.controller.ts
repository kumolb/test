import { Body, Controller, Delete, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { ResponseHandlerService } from 'src/app/utils/response-handler/response-handler.service';
import { UserService } from './user.service';
import { UserD } from './dto/user.dto';
import { Request, Response, NextFunction } from 'express';
@Controller('user')
export class UserController {
    constructor(private readonly responseService: ResponseHandlerService, private readonly userService: UserService) { }
    @Get('/all')
    async getUser(@Req() req: Request, @Res() res: Response, @Query() query: { page: number, limit: number }): Promise<any> {
        try {
            let userQuery = {},
                page = query.page ? +(query.page - 1) : 0,
                limit = query.limit ? +(query.limit) : 10;
            let total = await this.userService.getUserCount(userQuery);
            let user = await this.userService.getAllUser(page, limit);
            return this.responseService.success(res, "", user, { total, page, limit });
        } catch (err) {
            return this.responseService.error(res, err);
        }
    }

    @Get('byid/:id')
    async getSingleUser(@Req() req: Request, @Res() res: Response, @Param() id: String): Promise<any> {
        try {
            let id = req.params.id;
            let user = await this.userService.getUserById(id);
            return this.responseService.ok(res, "", user);
        } catch (err) {
            return this.responseService.error(res, err);
        }
    }

    @Post('create')
    async createUser(@Body() body: UserD, @Req() req: Request, @Res() res: Response): Promise<any> {
        try {
            let user = await this.userService.createUser(body);
            return this.responseService.created(res, "", user);
        } catch (err) {
            return this.responseService.error(res, err);
        }
    }

    @Delete("delete/:id")
    async deleteUser(@Req() req: Request, @Res() res: Response, @Param('id') id: String) {
        try {
            let id = req.params.id;
            let deleted = await this.userService.deleteUser(id);
            return this.responseService.ok(res, "", { deleted: "success" });
        } catch (err) {
            return this.responseService.error(res, err);
        }
    }
}
