import { ClubInterface } from "src/app/clubs/interface/club.interface";
import { FileInterface } from "src/app/files/interface/file.interface";
import { UserInterface } from "src/app/shared/interface/user";

export interface GarageInterface {
    club: ClubInterface;
    commentsCount: number;
    likesCount: number;
    impressionsCount: number;
    transmissionType: any;
    id: string,
    name: string,
    info: string,
    performanceModifications: string,
    cosmeticModifications: string,
    color: string,
    location: string,
    manufactureYear: number,
    buyingPrice: number,
    currentValue: number,
    createdAt: Date,
    updatedAt: Date,
    make: string,
    model: string,
    photos: FileInterface[],
    engineSize: number,
    doorsCount: number,
    seatCount: number,
    mileage: number,
    bodyType: string,
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
    user: UserInterface,
}