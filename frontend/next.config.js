/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/v4/:path*",
        destination: `https://ssafy.ssafy.com/:path*`,
      },
      {
        source: "/api/v1/:path*",
        destination: `https://ssafy.ssafy.com/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "tailwindui.com",
      "loading.io",
      "mblogthumb-phinf.pstatic.net",
      "blog.hmgjournal.com",
      "c4.wallpaperflare.com",
      "img1.daumcdn.net",
      "www.junggi.co.kr",
      "highnoonsportfishing.com",
      "www.williamsonrealty.com",
      "w7.pngwing.com",
      "cdn-icons-png.flaticon.com",
      "media.vlpt.us",
      "upload.wikimedia.org",
      "previews.123rf.com",
    ],
  },
};
