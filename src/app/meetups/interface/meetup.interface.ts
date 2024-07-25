import { Business } from "src/app/business/interface/business";
import { ClubInterface } from "src/app/clubs/interface/club.interface";
import { User } from "src/app/interface/user";
import { EventChargesInterface } from "./eventcharges.interface";

export interface MeetupInterface{
    id: string;
    eventName: string;
    promoter: string;
    eventLocation: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    eventCharges: EventChargesInterface;
    attendeesCount: number;
    impressionsCount: number;
    showItemsCount: number;
    user: User;
    business: Business;
    club: ClubInterface;
    eventType: string;
    isAttending: boolean;
    createdAt: Date;
    updatedAt: Date;
}