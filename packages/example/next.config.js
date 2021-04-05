const withPlugins = require('next-compose-plugins')

const withTM = require('next-transpile-modules')(['@contra-ui/core'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([[withBundleAnalyzer], [withTM]])
