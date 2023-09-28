import { JobInterface } from "./job.interface";
import { HobbyInterface } from "./hobby.interface";

export class IsConnectInterface{
    name: string;

    now: Date;

    isConnect: boolean;

    age: number;

    job: JobInterface;

    hobby: HobbyInterface[];
}
