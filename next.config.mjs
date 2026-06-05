/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Cloudflare Pages 등 정적 호스팅을 위한 정적 익스포트(out/ 생성)
  output: "export",
  // 정적 익스포트에서는 이미지 최적화 서버가 없으므로 비활성화
  images: { unoptimized: true },
};

export default nextConfig;
