import { Person } from "./person";

export interface Product {
    id: number;
    name: string;
    price: number;
    date: Date;
    stock: number;
    owner: Person;
}
