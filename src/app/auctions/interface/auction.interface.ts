import { Business } from "src/app/business/interface/business";
import { Listing } from "src/app/classifieds/interface/listing";
import { FileInterface } from "src/app/files/interface/file.interface";
import { BidInterface } from "./bid.interface";
import { UserInterface } from "src/app/shared/interface/user";

export interface AuctionInterface{
    id: string;
  bids: BidInterface[];
listingCategory: any;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    transmissionType: string;
    price: number,
    location: string,
    manufactureYear: string,
    listingFiles: FileInterface[],
    listingType: string,
    listedOn: Date,
    updatedAt: Date,
    user: UserInterface,
    business: Business,
    make: string,
    model: string,
    engineSize: number,
    doorsCount: number,
    seatCount: number,
    mileage: number,
    bodyType: string,
    color: string,
    fuelType: string,
    fuelConsumption: string,
    driveTrain: string,
    acceleration: string,
    topSpeed: number,
    engineLayout: string,
    enginePosition: string,
    enginePower: string,
    engineAspiration: string,
    previousOwnersCount: string,
    sellerType: string,
    motorbikeCategory: string,
    manufacturer: string,
    isSold: boolean
}