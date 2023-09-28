import { IsString } from "class-validator";

export class JobDto{
    @IsString()
    name: string;
}