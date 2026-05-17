import "./globals.css";
import QueryProvider from "./lib/query-client";

export const metadata = {
  title: "CMS Panel",
  description: "CMS Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}