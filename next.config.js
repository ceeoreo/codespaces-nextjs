/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
 }
 module.exports = {
    nextConfig,
    i18n: {
        locales: ['en-US', 'fr-FR', 'ja'],
        defaultLocale: 'en-US',
        // localization done wuth sub path routing 
        // https://nextjs.org/docs/pages/building-your-application/routing/internationalization#sub-path-routing
    },

 }