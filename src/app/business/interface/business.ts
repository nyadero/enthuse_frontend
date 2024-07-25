import { UserInterface } from "src/app/shared/interface/user";
import { Category } from "../enums/category";
import { BService } from "./business-service";
import { ContactInfo } from "./contact-info";
import { Cordinates } from "./cordinates";
import { Rating } from "./rating";

export interface Business{
    reviewsCount: number;
    id: string;
    category: Category;
    name: string;
    about: string;
    description: string;
    location: string;
    coverPic: string;
    logo: string;
    contactInfo: ContactInfo;
    coordinates: Cordinates;
    // ratingList: Rating[];
    serviceList: BService[];
    owner: UserInterface;
    createdAt: Date;
    updatedAt: Date;
    averageRating: number;
    ratingCount: number;
}