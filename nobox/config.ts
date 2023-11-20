import { Config, getFunctions, getRowedSchemaCreator } from "nobox-client";
import { getKeyGroupSchemaCreator } from "nobox-client/lib/create-schema/create-key-group-schema";

export const config: Config = {
    endpoint: "http://localhost:8000",
    project: "slui",
    token: "cfabias8s2a0mt2mb-dmbhmg65ddhf-mtl3d7gm9"
};


export const createSchema = getRowedSchemaCreator(config);
export const createKeyValue = getKeyGroupSchemaCreator(config);
export const Nobox = getFunctions(config);