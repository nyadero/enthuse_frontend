import { Role } from "./role";

export interface UserInterface {
    permissionList: string[];
    brands: string[];
    interests: string[];
    location: string;
    jwtToken: string;
    id: string,
    name: string,
    username: string,
    email: string,
    avatar: string,
    coverPicture: string,
    about: string,
    role: Role,
    enabled: boolean,
    followersCount: number;
    followingCount: number;
}