import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "케어링 - 부모님은 소중하니까",
  description:
    "가족요양, 방문요양, 주간보호, 요양원, 실버타운까지. 부모님은 소중하니까, 무엇이든 물어보세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1D2433]">
        {children}
      </body>
    </html>
  );
}
