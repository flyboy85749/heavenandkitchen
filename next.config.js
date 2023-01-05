/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.allrecipes.com', 'www.themealdb.com'
    ]
  }

}

module.exports = nextConfig
