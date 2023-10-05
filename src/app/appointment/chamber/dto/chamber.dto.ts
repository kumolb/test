import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChamberDocument = Chamber & Document;
@Schema()
export class Chamber {
    @Prop()
    title: String

    @Prop()
    organizationId: String

    @Prop()
    details: String

    @Prop()
    monthly: Boolean

    @Prop({
        type: [{
            day: String,
            startTime: String,
            endTime: String,
            maxAppointment: Number
        }]
    })
    schedule: {
        day: String,
        startTime: String,
        endTime: String,
        maxAppointment: Number
    }[]

    @Prop()
    maxAppointment: Number

    @Prop()
    town: String

    @Prop()
    city: String

    @Prop()
    address: String
}

export const ChamberDocument = SchemaFactory.createForClass(Chamber)