import { IsString } from "class-validator";

export class HobbyInterface{
    @IsString()
    name: string;
}