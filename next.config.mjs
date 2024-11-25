/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
