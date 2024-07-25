import { Business } from "src/app/business/interface/business";
import { ListingType } from "../enums/listing-type";
import { FileInterface } from "src/app/files/interface/file.interface";
import { UserInterface } from "src/app/shared/interface/user";
import { TransmissionTypeEnum } from "../enums/transmissiontypes.enum";
import { FuelTypesEnum } from "../enums/fueltypes.enum";

export interface Listing {
vtransmissionType: TransmissionTypeEnum;
mtransmissionType: TransmissionTypeEnum;
mmileage: number;
vmileage: number;
vfuelType: FuelTypesEnum;
mfuelType: FuelTypesEnum;
    id: string,
    name: string,
    price: number,
    location: string,
    manufactureYear: string,
    listingFiles: FileInterface[],
    description: string,
    listingType: ListingType,
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