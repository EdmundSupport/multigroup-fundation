import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/api/v1/datasource/datasource.module";
import { ExpirenmentService } from "./application/service/expirenment.service";
import { ExpirenmentController } from "./infrastructure/controller/expirenment.controller";

@Module({
    imports: [
        DatasourceModule,
    ],
    providers: [
        ExpirenmentService,
    ],
    controllers: [
        ExpirenmentController,
    ],
    exports: [
        ExpirenmentService,
    ]
})
export class ExpirenmentModule { }