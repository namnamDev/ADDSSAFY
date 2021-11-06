// // ** @type {import('next').NextConfig} */
// const isProduction = process.env.NODE_ENV === "production";
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/v4/:path*",
//         destination: `https://meeting.ssafy.com/api/v4/:path*`,
//       },
//       // backend
//       {
//         source: "/api/:path*",
//         destination: `http://k5d204.p.ssafy.io:8080/api/:path*`,
//       },
//     ];
//   },
//   reactStrictMode: true,
//   images: {
//     loader: "imgix",
//     path: "https://k5d204.p.ssafy.io/",
//     domains: [
//       "images.unsplash.com",
//       "tailwindui.com",
//       "loading.io",
//       "mblogthumb-phinf.pstatic.net",
//       "blog.hmgjournal.com",
//       "c4.wallpaperflare.com",
//       "img1.daumcdn.net",
//       "www.junggi.co.kr",
//       "highnoonsportfishing.com",
//       "www.williamsonrealty.com",
//       "w7.pngwing.com",
//       "cdn-icons-png.flaticon.com",
//       "media.vlpt.us",
//       "upload.wikimedia.org",
//       "previews.123rf.com",
//     ],
//   },
// };

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    // path: "https://k5d204.p.ssafy.io/",
  },
  exportPathMap: function () {
    return {
      "https://k5d204.p.ssafy.io/": { page: "/" },
      // "/index": { page: "/index" },
      "https://k5d204.p.ssafy.io/Main": { page: "/Main" },
      "https://k5d204.p.ssafy.io/Mypage": { page: "/Mypage" },
      "https://k5d204.p.ssafy.io/MypageEdit": { page: "/MypageEdit" },
      "https://k5d204.p.ssafy.io/TeamBuildingCurrent": { page: "/TeamBuildingCurrent" },
      "https://k5d204.p.ssafy.io/TeamCreate": { page: "/TeamCreate" },
      "https://k5d204.p.ssafy.io/TeamModify": { page: "/TeamModify" },
    };
  },
};
