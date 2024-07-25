import { UserInterface } from "src/app/shared/interface/user";

export interface ClubInterface{
totalMembers: number;
    id:string;
    clubLogo: string;
    clubCoverpic: string;
    clubName: string;
    clubDescription: string,
    clubAcessibility: string,
    owner: UserInterface
}