import { Listing } from "src/app/classifieds/interface/listing";
import { GarageInterface } from "src/app/garage/interface/garage-interface";
import { PostInterface } from "src/app/posts/interface/post-interface";
import { UserInterface } from "src/app/shared/interface/user";

export interface CommentInterface{
    id: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    parentComment: CommentInterface;
    replies: CommentInterface[];
    repliesCount: number;
    user: UserInterface;
    post: PostInterface | undefined;
    listing: Listing | undefined;
    garage: GarageInterface | undefined
}