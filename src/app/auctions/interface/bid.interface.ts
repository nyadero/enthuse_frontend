import { UserInterface } from "src/app/shared/interface/user";
import { AuctionInterface } from "./auction.interface";

export interface BidInterface{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    auction: AuctionInterface;
    bidder: UserInterface;
    amount: number;
    isHighest: boolean;
}