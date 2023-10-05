import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RoleDocument = Role & Document;
@Schema()
export class Role {
    @Prop()
    role: String

    @Prop({
        type: [String]
    })
    rights: String[]

    @Prop()
    id: String
}

export const RoleDocument = SchemaFactory.createForClass(Role);