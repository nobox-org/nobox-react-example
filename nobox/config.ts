import { Config, getFunctions, getRowedSchemaCreator } from "nobox-client";
import { getKeyGroupSchemaCreator } from "nobox-client/lib/create-schema/create-key-group-schema";

export const config: Config = {
    endpoint: "http://localhost:8000",
    project: "hey",
    token: "a2tu5bj-4dacm2anramgbap-4m2a0acaasnvjzj3"
};


export const createSchema = getRowedSchemaCreator(config);
export const createKeyValue = getKeyGroupSchemaCreator(config);
export const Nobox = getFunctions(config);