import { User } from "src/app/interface/user";
import { Listing } from "./listing";

export interface ListingInquiry {
    id: string,
    inquiry: string,
    parentInquiry: ListingInquiry,
    createdAt: Date,
    updatedAt: Date,
    childInquiries: ListingInquiry[],
    user: User,
    listing: Listing,
    childRepliesCount: number;
}