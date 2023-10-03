import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AaaConnectionHelper, aaaConnectionProvider, aaaModels } from "./application";

@Module({
    imports: [
        SequelizeModule.forRootAsync({ useClass: AaaConnectionHelper }),
        SequelizeModule.forFeature(aaaModels),
    ],
    providers: [
        ...aaaConnectionProvider,
    ],
    exports: [
        ...aaaConnectionProvider,
    ]
})
export class ConnectionModule { }