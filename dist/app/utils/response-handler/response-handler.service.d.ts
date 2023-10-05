import { Response } from 'express';
export declare class ResponseHandlerService {
    success(res: Response, message: String, body: any, others: any): any;
    ok(res: Response, message: String, body: any): any;
    created(res: Response, message: String, body: any): Response<any, Record<string, any>>;
    notFound(res: Response, message: String, body: any): any;
    error(res: Response, err: Error): any;
}
