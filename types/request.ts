import { Blog } from "./blog";

export interface ResponseData {
  error: string | null,
  code: number,
  data: Blog[] | Blog
}