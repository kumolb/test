import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type DegreeDocument = Degree & Document;

@Schema()
export class Degree {
    @Prop()
    title: String

    @Prop()
    id: String
}

export const DegreeSchema = SchemaFactory.createForClass(Degree);