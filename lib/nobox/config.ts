import { Config, getFunctions, getSchemaCreator } from "nobox-client";
import { NOBOX_API, NOBOX_PROJECT, NOBOX_TOKEN } from '../../config/env.config';


export const config: Config = {
    endpoint: NOBOX_API,
    project: NOBOX_PROJECT,
    token: NOBOX_TOKEN
};



export const createSchema = getSchemaCreator(config, { type: "rowed" });
export const Nobox = getFunctions(config);
