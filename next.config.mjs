import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', "avatar.vercel.sh", "images.unsplash.com", "safetechco.com"],
    },
};

export default withNextIntl(nextConfig);