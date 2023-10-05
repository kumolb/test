import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './dto/role.dto';
import { Model } from 'mongoose';

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role.name) private RoleModel: Model<RoleDocument>) { }

    async createRole(role: Role): Promise<any> {
        let roleId = await this.RoleModel.countDocuments({});
        let newRole = new this.RoleModel(role);
        newRole.id = roleId + 1;
        newRole = await newRole.save();
        return newRole;
    }

    async getRoles(): Promise<any> {
        let roles = await this.RoleModel.find({}).select("-_id -_v").sort({ id: -1 }).lean();
        return roles;
    }

    async getRole(query: Object): Promise<any> {
        let role = await this.RoleModel.findOne(query).select("-_id -_v").lean();
        return role;
    }

    async updateRole(id: String, updateRole: Role): Promise<any> {
        let updated = await this.RoleModel.updateOne({ id: id }, { $set: updateRole });
        return updated;
    }

    async deleteRole(id: String, updateRole: Role): Promise<any> {
        let deleted = await this.RoleModel.deleteOne({ id: id });
        return deleted;
    }

}
