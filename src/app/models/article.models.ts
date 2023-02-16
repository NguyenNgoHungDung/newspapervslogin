import { Data } from "@angular/router";
export interface Ariticle{
    source: {
        id: string,
        name: string,
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: Data,
    content: string,
}