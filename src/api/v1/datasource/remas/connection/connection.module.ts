import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { aaaConnectionProvider, aaaModels } from "./application/providers/aaa.connection.provider";
import {AaaConnectionHelper} from "./application/helper/connection.helper";
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