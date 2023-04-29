import { Config, getFunctions, getSchemaCreator } from "nobox-client";

export const config: Config = {
    endpoint: "https://api.nobox.cloud",
    project: "test-project",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NDNjMjA5MzQxYzFhNTk1NWEyYjg0ZDEiLCJlbWFpbCI6ImplZ2VkZWFraW50dW5kZUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE3MDMzNzU5P3Y9NCIsImZpcnN0TmFtZSI6IkFraW50dW5kZSIsImxhc3ROYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTE2VDE2OjIxOjM5LjIyMVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTE2VDE2OjIxOjM5LjIyMVoifSwiaWF0IjoxNjgyNzUxNzI2fQ.NiuCBn7dbu7AQcqJwxmHCW_mlPSvDlj7XX5aWYWfQgU"
};
export const createSchema = getSchemaCreator(config);
export const Nobox = getFunctions(config);