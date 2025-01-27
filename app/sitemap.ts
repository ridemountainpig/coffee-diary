import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.coffee-diary.com/",
            priority: 1,
            lastModified: new Date(),
        },
        {
            url: "https://www.coffee-diary.com/write-coffee-diary",
            priority: 0.8,
            lastModified: new Date(),
        },
        {
            url: "https://www.coffee-diary.com/github-coffee-diary",
            priority: 0.8,
            lastModified: new Date(),
        },
    ];
}
