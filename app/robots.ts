import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/favicon.ico", "/_next/static/media/"],
        },
        sitemap: "https://coffee-diary.com/sitemap.xml",
    };
}
