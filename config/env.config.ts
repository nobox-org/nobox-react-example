/*
    Setup globally used variables

    -> Custom
    -> Environment
*/

const env = process.env;


const productionAPI = "https://api.nobox.cloud";
const isProduction = env.NODE_ENV === 'production';

const APP_STAGE:string = env.NODE_ENV;
const NOBOX_API:string = env.NBX_API || productionAPI;
const NOBOX_PROJECT: string = env.NBX_PROJECT || '';
const NOBOX_TOKEN:string = env.NBX_TOKEN || '';


if (NOBOX_TOKEN === '') {
    throw new Error("Token is required, please set/update your token");
}


if (NOBOX_PROJECT === '') {
    throw new Error("Project slug is required, please add your project slug");
}

if (!isProduction && (NOBOX_API === productionAPI)) {
    console.warn("Running as production");
}



export {
    APP_STAGE, NOBOX_API,
    NOBOX_PROJECT, NOBOX_TOKEN
}
