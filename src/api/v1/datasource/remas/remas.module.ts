import { Module } from "@nestjs/common";
import { ConnectionModule } from "./connection/connection.module";

@Module({
    imports: [
        ConnectionModule,
    ],
    exports: [
        ConnectionModule,
    ]
})
export class RemasModule { }