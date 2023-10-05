/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
export declare type DoctorDocument = Doctor & Document;
export declare class Doctor {
    id: String;
    firstName: String;
    lastName: String;
    surname: String;
    prefix: String;
    name: String;
    bPrefix: String;
    bFirstName: String;
    bLastName: String;
    bName: String;
    email: String;
    contactNumber: String;
    specialty: String;
    experience: {
        position: String;
        department: String;
        startDate: String;
        endDate: String;
        years: Number;
        organization: String;
    }[];
    degrees: {
        title: String;
        details: String;
        institute: String;
        country: String;
        subject: String;
    }[];
    chamberOrgId: String[];
    organizationId: String;
    chamber: String[];
    password: String;
    birthDate: String;
    age: Number;
    isEmailVerified: Boolean;
    isContactVerified: Boolean;
    status: String;
    otp: {
        createdAt: String;
        otp: String;
        isUsed: Boolean;
    };
    isAvailable: Boolean;
    details: String;
    image: String;
    visitingCard: String;
}
export declare const DoctorSchema: import("mongoose").Schema<Doctor, import("mongoose").Model<Doctor, any, any, any, any>, {}, {}, {}, {}, "type", Doctor>;
