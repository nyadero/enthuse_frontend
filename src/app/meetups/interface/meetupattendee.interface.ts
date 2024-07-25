
import { User } from "src/app/interface/user";
import { Role } from "src/app/interface/role";

export interface MeetupAttendeeInterface{
    id: string;
    user: User;
    attendanceStatus: string;
    attendanceTier: string;
    role: Role;
    showItems: number;
    timeRegistered: Date;
}