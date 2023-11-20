import { NextRequest } from "next/server";


type ID = string;

export interface Blog {
    id?: ID,
    content: string,
    user: ID,

    createdAt?: string,
    updatedAt?: string
}
