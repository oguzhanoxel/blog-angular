import { Post } from "./post";

export interface DataPosts{
    count: number;
    next: string;
    previous: string;
    results: Post[];
}