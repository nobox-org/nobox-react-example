import { Space } from "nobox-client";
import { createSchema } from "../config";

interface Car {
    year: number;
    brand: string;
    model: string;
}

export const CarStructure: Space<Car> = {
    space: "Car",
    description: "A Record Space for Cars",
    webhooks: {
        onInsertUrl: "https://ulr.com",
        onUpdateUrl: "https://ukl.com"
    },
    structure: {
        year: {
            description: "Year it was made",
            type: Number,
            required: true
        },
        brand: {
            description: "Brand of the car",
            required: true,
            type: Number,
        },
        model: {
            description: "Model of the car",
            required: true,
            type: String,
        }
    }
}

export const CarModel = createSchema<Car>(CarStructure);


