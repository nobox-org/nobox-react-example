import { Space } from "nobox-client";
import { createSchema } from "../config";
import { Blog } from "@/types/blog";


export const BlogStructure: Space<Blog> = {
    space: "MyCri",
    description: "A Record Space for a microblog site",
    structure: {
        content: {
            description: "Blog content",
            type: String,
            required: true
        },
        user: {
            description: "Owner",
            required: false,
            type: String,
        }
    }
}

export const BlogModel = createSchema<Blog>(BlogStructure);