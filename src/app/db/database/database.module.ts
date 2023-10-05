import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { connection } from 'mongoose';
@Module({
    imports: [MongooseModule.forRoot("mongodb+srv://kumol:kumol254@cluster0.tsazd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        //     connectionFactory: async (connection) => {
        //         console.log(connection.status)
        //         // connection.on("connected", () => {
        //         //     console.log("connected");
        //         // });
        //         // connection.on("error", () => {
        //         //     console.log("error");
        //         // })
        //     }
        // }
        // {


        // //connectTimeoutMS: 10000,
        // // connectionFactory: async (connection) => {
        // //     console.log(connection);
        // //     connection.on("connected", () => {
        // //         console.log("Db is connected");
        // //     });
        // //     connection.on("disconnected", () => {
        // //         console.log("DB disConnected")
        // //     });
        // //     connection.on("error", (error) => {
        // //         console.log(`The error to connect db is : ${error}`);
        // //     })
        // //     return connection;
        // // }
        // }
    )],
    exports: [MongooseModule]
})
export class DatabaseModule { }
