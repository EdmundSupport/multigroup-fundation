import { Module } from "@nestjs/common";
import { ExpirenmentModule } from "./expirenment/expirenment.module";
@Module({
    imports: [
        ExpirenmentModule,
    ],
    exports: [
        ExpirenmentModule,
    ],
})
export class ModuleModule { }