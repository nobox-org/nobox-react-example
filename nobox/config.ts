import { Config, getFunctions, getRowedSchemaCreator } from "nobox-client";
import { getKeyGroupSchemaCreator } from "nobox-client/lib/create-schema/create-key-group-schema";

export const config: Config = {
    endpoint: "http://localhost:8000",
    project: "test-project",
    token: "4f3ta31zd9m7gaibm2nlsod5gobmdl4dsfy8amgv"
};

export const createSchema = getRowedSchemaCreator(config);
export const createKeyValue = getKeyGroupSchemaCreator(config);
export const Nobox = getFunctions(config);