import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "cloud-run-nextjs-public-env-vars-demo",
  description: "Cloud Run ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
