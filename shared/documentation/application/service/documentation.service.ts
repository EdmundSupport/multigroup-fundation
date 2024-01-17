import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as basicAuth from 'express-basic-auth';

export class DocumentationService {
    constructor() { }

    init(app: INestApplication, config: ConfigService) {
        const SWAGGER_USER = config.get<string>('SWAGGER_USER');
        const SWAGGER_PASS = config.get<string>('SWAGGER_PASS');
        app.use(
            ['/docs', '/docs'],
            basicAuth({
                challenge: true,
                users: {
                    [SWAGGER_USER]: SWAGGER_PASS,
                },
            }),
        );

        const documentBuilder = new DocumentBuilder()
            .setTitle('API REMAS')
            .setVersion('1.0')
            .addBearerAuth(
                {
                    // I was also testing it without prefix 'Bearer ' before the JWT
                    description: `Bearer <JWT>`,
                    name: 'Authorization',
                    bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
                    scheme: 'Bearer',
                    type: 'http', // I`ve attempted type: 'apiKey' too
                    in: 'Header'
                },
                'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
            )
            .build();

        const document = SwaggerModule.createDocument(app, documentBuilder);
        SwaggerModule.setup('docs', app, document);
    }
}