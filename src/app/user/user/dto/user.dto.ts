import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = UserD & Document;

@Schema()
export class UserD {
    @Prop()
    name: String

    @Prop()
    phoneNumber: String

    @Prop()
    verifiedPhone: Boolean

    @Prop()
    email: String

    @Prop()
    verifiedEmail: Boolean

    @Prop()
    gender: String

    @Prop()
    password: String

    @Prop()
    id: String

    @Prop()
    roleId: String
}

export const UserDocument = SchemaFactory.createForClass(UserD);