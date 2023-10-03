import { Module } from "@nestjs/common";
import { ExpirenmentModule } from "./expirenment";
@Module({
    imports: [
        ExpirenmentModule,
    ],
    exports: [
        ExpirenmentModule,
    ],
})
export class ModuleModule { }