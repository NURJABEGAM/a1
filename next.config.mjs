let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  }, This is required for Netlify deployment
  // This is required for Netlify deployment
  output: 'export',
  eslint: {uringBuilds: true,
    ignoreDuringBuilds: true,
  },pescript: {
  typescript: {Errors: true,
    ignoreBuildErrors: true,
  },perimental: {
  experimental: {orker: true,
    webpackBuildWorker: true,: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  compiler: {
    // Control minification here if necessaryif (userConfig) {
  },will have a "default" property
}ig

if (userConfig) {  for (const key in config) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfigpeof nextConfig[key] === 'object' &&

  for (const key in config) {
    if (extConfig[key] = {
      typeof nextConfig[key] === 'object' &&],
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {lse {
        ...nextConfig[key],nfig[key] = config[key]
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }export default nextConfig
  }}

export default nextConfig
