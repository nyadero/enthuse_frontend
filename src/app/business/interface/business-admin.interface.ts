import { Role } from "src/app/authentication/enum/roles.enum";
import { UserInterface } from "src/app/shared/interface/user";
import { Business } from "./business";

export interface BusinessAdminInterface{
    id: string,
    business: Business,
    user: UserInterface,
    role: Role
}