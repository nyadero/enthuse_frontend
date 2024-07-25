import { Business } from "src/app/business/interface/business";
import { Listing } from "src/app/classifieds/interface/listing";
import { GarageInterface } from "src/app/garage/interface/garage-interface";
import { PostInterface } from "src/app/posts/interface/post-interface";
import { UserInterface } from "src/app/shared/interface/user";

export interface FileInterface{
    id: string,
    fileName: string,
    fileType: String,
    fileSize: number,
    url: string,
    user: UserInterface;
    business: Business;
    listing: Listing,
    garage: GarageInterface,
    post: PostInterface;
    dateUploaded: string
}