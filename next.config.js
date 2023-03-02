const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? './' : '',
  images: {
    unoptimized: true,
  },
  ...withNextra(nextConfig),
}
