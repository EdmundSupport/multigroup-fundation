import { IsArray, IsBoolean, IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
import { JobDto } from "./job.dto";
import { HobbyDto } from "./hobby.dto";

export class IsConnectDto{
    @IsString()
    name: string;

    @IsDate()
    now: Date;

    @IsBoolean()
    isConnect: boolean;

    @IsNumber()
    age: number;

    @ValidateNested()
    job: JobDto;

    @ValidateNested()
    @IsArray()
    hobby: HobbyDto[];
}
