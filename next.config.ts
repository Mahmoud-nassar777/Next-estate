import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    cacheComponents: true,
    partialPrefetching: true,
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
            // {
            //     protocol: "https",
            //     hostname: "https://lh3.googleusercontent.com"
            // },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            { protocol: "https", hostname: "res.cloudinary.com" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "picsum.photos" },
            { protocol: "https", hostname: "fastly.picsum.photos" },
        ]
    }
};

export default nextConfig;