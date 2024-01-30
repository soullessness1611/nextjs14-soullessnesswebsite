// /** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fuelfit.com.sg",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
