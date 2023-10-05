import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserD, UserDocument } from './dto/user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserD.name) private UserModel: Model<UserDocument>) { }

    async getUserCount(query: any): Promise<any> {

        return await this.UserModel.countDocuments(query);
    }
    async getAllUser(page: number, limit: number): Promise<any> {
        console.log(process.env.dburl)
        let users = await this.UserModel.find({}).sort({ _id: -1 }).skip(page).limit(limit).lean();
        return users;
    }
    async createUser(body: UserD): Promise<any> {
        let user = new this.UserModel(body);
        user.id = user._id;
        let newUser = await user.save();
        return newUser;
    }
    async deleteUser(id: String): Promise<any> {
        let deleted = await this.UserModel.deleteOne({ id: id });
        return deleted;
    }
    async getUserById(id: String): Promise<any> {
        let user = await this.UserModel.findOne({ id: id }).lean();
        return user;
    }
}
