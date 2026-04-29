/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/audit",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
