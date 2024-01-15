/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "coffee-diary.com",
            },
        ],
    },
};

module.exports = nextConfig;
