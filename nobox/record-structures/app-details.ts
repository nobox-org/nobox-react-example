import { Space } from "nobox-client";
import { createKeyValue, createSchema } from "../config";

interface AppDetails {
    name: string;
    language: string;
    platform: string;
}

export const AppDetailsStructure: Space<AppDetails> = {
    space: "AppDetails",
    description: "A Record Space for storing App Details",
    structure: {
        name: {
            description: "Year it was made",
            type: String,
            required: true
        },
        language: {
            description: "Brand of the car",
            required: true,
            type: String,
        },
        platform: {
            description: "Model of the car",
            required: true,
            type: String,
        }
    }
}

export const AppDetailsModel = createKeyValue<AppDetails>(AppDetailsStructure);