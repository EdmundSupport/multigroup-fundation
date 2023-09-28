import { HttpService } from '@nestjs/axios';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FilterResponseHelper } from 'shared/filter_response/application/helper/filter_response.helper';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request?.headers?.authorization;
        const apiAuthUrl = this.configService.get<string>('API_AUTH');
        await this.httpService.axiosRef.get(apiAuthUrl + '/v5/auth/verify', { headers: { Authorization: token } });
        return true;
    }
}