import { Ariticle } from "./article.models";

export interface News{
    status: string;
    totalResults: number;
    articles: Ariticle[];

}