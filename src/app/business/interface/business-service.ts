import { Business } from "./business";

export interface BService {
    id: string,
    name: string,
    description: string,
    priceRange: string,
    createdAt: Date,
    updatedAt: Date,
    business: Business,
}