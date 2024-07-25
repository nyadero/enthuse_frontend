import { Business } from "src/app/business/interface/business";
import { FileInterface } from "src/app/files/interface/file.interface";
import { ClubInterface } from "src/app/clubs/interface/club.interface";
import { UserInterface } from "src/app/shared/interface/user";

export interface PostInterface{
    impressionsCount: number;
    id: string,
    title: string,
    description: string,
    mediaUrls: FileInterface[],
    commentsCount: number,
    likesCount: number,
    postType: string,
    createdAt: Date,
    club: ClubInterface,
    postOwner: string,
    business: Business,
    user: UserInterface,
    isPostLiked: boolean,
}