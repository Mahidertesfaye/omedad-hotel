import { MainLayout } from "@/components/layout";
import { Providers } from "@/components/providers";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import { fontVariables } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <SiteJsonLd />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
