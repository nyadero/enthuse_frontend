import { UserInterface } from "src/app/shared/interface/user";
import { Business } from "./business";

export interface Rating{
    id: string,
    review: string,
    rating: number,
    business: Business,
    user: UserInterface,
    createdAt: Date,
}