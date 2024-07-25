import { GarageInterface } from "src/app/garage/interface/garage-interface";
import { MeetupInterface } from "./meetup.interface";
import { MeetupAttendeeInterface } from "./meetupattendee.interface";

export interface MeetupEventShowItemInterface{
  id: string;
  garageShowItem: GarageInterface;
  event: MeetupInterface;
  eventAttendee: MeetupAttendeeInterface;
  attendanceStatus: string;
}