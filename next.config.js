/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['dummyimage.com', 'ui-avatars.com', 'storage.googleapis.com'],
    },
}

module.exports = nextConfig
