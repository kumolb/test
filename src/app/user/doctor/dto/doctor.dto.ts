import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
    @Prop()
    id: String

    @Prop()
    firstName: String

    @Prop({ required: true })
    lastName: String

    @Prop()
    surname: String

    @Prop({
        default: "DR."
    })
    prefix: String

    @Prop()
    name: String

    @Prop({
        default: "ডাঃ"
    })
    bPrefix: String

    @Prop()
    bFirstName: String

    @Prop()
    bLastName: String

    @Prop()
    bName: String

    @Prop()
    email: String

    @Prop()
    contactNumber: String

    @Prop()
    specialty: String

    @Prop({
        default: [],
        type: [{
            position: { type: String },
            department: { type: String },
            startDate: { type: String },
            endDate: { type: String },
            years: Number,
            organization: String
        }]
    })
    experience: {
        position: String,
        department: String,
        startDate: String,
        endDate: String,
        years: Number,
        organization: String
    }[]

    @Prop({
        type: [{
            title: { type: String },
            details: { type: String },
            institute: { type: String },
            country: { type: String },
            subject: { type: String }
        }]
    })
    degrees: {
        title: String,
        details: String,
        institute: String,
        country: String,
        subject: String
    }[]

    @Prop({
        type: [String],
        default: []
    })
    chamberOrgId: String[]

    @Prop({ default: "" })
    organizationId: String
    // @Prop({
    //     type: [{
    //         title: { type: String },
    //         organizationId: { type: String },
    //         details: { type: String },
    //         startDay: { type: String },
    //         endDay: { type: String },
    //         dayRange: [
    //             "Sunday",
    //             "Monday",
    //             "Tuesday",
    //             "Wednesday",
    //             "Thursday",
    //             "Friday"
    //         ],
    //         startTime: { type: String },
    //         endTime: { type: String },
    //         "numberOfAppointment": 0,
    //         "maxAppointment": 40,
    //         "town": "Moulv",
    //         "city": "Syl",
    //     }]
    // })
    @Prop({
        type: [String],
        default: []
    })
    chamber: String[]

    @Prop()
    password: String

    @Prop()
    birthDate: String

    @Prop()
    age: Number

    @Prop({
        default: false
    })
    isEmailVerified: Boolean

    @Prop({
        default: false
    })
    isContactVerified: Boolean

    @Prop()
    status: String

    @Prop({
        type: {
            createdAt: String,
            otp: String,
            isUsed: Boolean
        },
        default: {
            createdAt: "String",
            otp: "String",
            isUsed: false
        }
    })
    otp: {
        createdAt: String,
        otp: String,
        isUsed: Boolean
    }

    @Prop({ default: "" })
    isAvailable: Boolean

    @Prop({ default: "" })
    details: String

    @Prop()
    image: String

    @Prop()
    visitingCard: String
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);