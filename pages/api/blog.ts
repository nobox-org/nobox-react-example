// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '@/data/blog.json';
import { Blog } from '@/types/blog';
import { BlogModel } from '@/lib/nobox/model/user';
import { ResponseData } from '@/types/request';
import { handleGet, handlePost } from '@/helpers/blog.helper';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  let result: ResponseData;
  
  if (req.method === 'POST') {
    
    result = await handlePost(req);
  
  } else {

    result = await handleGet();
  }



  return res.status(result.code).send(result);

}
