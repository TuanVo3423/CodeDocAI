/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const dns = require('dns');

dns.setDefaultResultOrder('ipv4first');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/assistant': { page: '/assistant' },
      '/auth/sign-up': { page: '/auth/sign-up' },
      '/auth/sign-in': { page: '/auth/sign-in' },
      '/auth/forgot-password': { page: '/auth/forgot-password' },
      '/backlogs': { page: '/backlogs' },
      '/coding-structure': { page: '/coding-structure' },
      '/dashboard/calendar-tracking': { page: '/dashboard/calendar-tracking' },
      '/dashboard/historical-system': { page: '/dashboard/historical-system' },
      '/dashboard/overview': { page: '/dashboard/overview' },
      '/dashboard/project-boards': { page: '/dashboard/project-boards' },
      '/dashboard/project-roadmap': { page: '/dashboard/project-roadmap' },
      '/dashboard/todo-list': { page: '/dashboard/todo-list' },
      '/dashboard/vision-goals': { page: '/dashboard/vision-goals' },
      '/logo': { page: '/logo' },
      '/sop-document': { page: '/sop-document' },
      '/user-interface': { page: '/user-interface' },
      '/result': { page: '/result' },
      '/result/documents/:id?__nextDefaultLocale=:locale': {
        page: '/result/documents/[id]',
      },
    };
  },
  swcMinify: true,
  reactStrictMode: false,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  // i18n,
};

module.exports = nextConfig;
