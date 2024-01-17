import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
    imports: [
        // DatasourceModule,
        // ModuleModule,
    ],
    exports: [
        // DatasourceModule,
        // ModuleModule,
    ]
})
export class V1Module { }
