import { User } from "src/app/interface/user";

export interface ForumInterface {
    id:string;
    forumLogo: string;
    forumCoverpic: string;
    forumName: string;
    forumDescription: string,
    forumAcessibility: string,
    owner: User
}