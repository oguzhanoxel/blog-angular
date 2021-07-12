import { Post } from "./post";

export interface DataPosts{
    count: number;
    next: string;
    previous: string;
    first_page: string;
    last_page: string;
    page_number: number;
    results: Post[];
}