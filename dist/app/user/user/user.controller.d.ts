import { ResponseHandlerService } from 'src/app/utils/response-handler/response-handler.service';
import { UserService } from './user.service';
import { UserD } from './dto/user.dto';
import { Request, Response } from 'express';
export declare class UserController {
    private readonly responseService;
    private readonly userService;
    constructor(responseService: ResponseHandlerService, userService: UserService);
    getUser(req: Request, res: Response, query: {
        page: number;
        limit: number;
    }): Promise<any>;
    getSingleUser(req: Request, res: Response, id: String): Promise<any>;
    createUser(body: UserD, req: Request, res: Response): Promise<any>;
    deleteUser(req: Request, res: Response, id: String): Promise<any>;
}
