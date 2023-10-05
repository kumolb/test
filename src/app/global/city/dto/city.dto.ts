import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CityDocument = City & Document;

@Schema()
export class City {
    @Prop()
    name: String

    @Prop()
    id: String
}

export const CitySchema = SchemaFactory.createForClass(City);