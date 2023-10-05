import { UserD, UserDocument } from './dto/user.dto';
import { Model } from 'mongoose';
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    getUserCount(query: any): Promise<any>;
    getAllUser(page: number, limit: number): Promise<any>;
    createUser(body: UserD): Promise<any>;
    deleteUser(id: String): Promise<any>;
    getUserById(id: String): Promise<any>;
}
