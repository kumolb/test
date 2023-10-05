import { Role, RoleDocument } from './dto/role.dto';
import { Model } from 'mongoose';
export declare class RoleService {
    private RoleModel;
    constructor(RoleModel: Model<RoleDocument>);
    createRole(role: Role): Promise<any>;
    getRoles(): Promise<any>;
    getRole(query: Object): Promise<any>;
    updateRole(id: String, updateRole: Role): Promise<any>;
    deleteRole(id: String, updateRole: Role): Promise<any>;
}
