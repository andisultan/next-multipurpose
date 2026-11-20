import { DM_Sans, Forum } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${forum.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
