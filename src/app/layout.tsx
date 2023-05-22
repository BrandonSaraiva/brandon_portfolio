import "./globals.css";
import { Inter, Roboto, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Brandon Cardoso",
  description: "Portfolio pessoal Brandon Cardoso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} ${jetBrains.variable} font-alt`}
      >
        {children}
      </body>
    </html>
  );
}
