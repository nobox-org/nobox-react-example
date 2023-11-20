import { BlogModel } from "@/lib/nobox/model/user";
import { Blog } from "@/types/blog";
import { ResponseData } from "@/types/request";
import { NextApiRequest } from "next";



export const handlePost = async (req: NextApiRequest): Promise<ResponseData> => {

    let code = 200;
    let error = null;
    let data: Blog[] | Blog = [];


    const {body:raw_body} = req;


    const body = JSON.parse(raw_body);

    
    // Send to nobox

    try {
      const dt = await BlogModel.insertOne({
        content: body.data,
        user: ""
      });


      code = 201;
      data = dt;


    } catch (err) {
      
        code = 500;
        error = "Could make post"
    }


    return {
        code,
        error,
        data
    }
}


export const handleGet = async (): Promise<ResponseData> => {
    let code = 200;
    let error = null;
    let data: Blog[] | Blog = [];



    try {
  
      const contents = await BlogModel.find();
  
      data = (contents as Blog[]);
      code = 200;
    } catch(err) {

        console.log("ERRRRR")
      error = "Could not load content";
      code = 500;
      data = [];
    }


    return {
        code,
        error,
        data
    }
}
