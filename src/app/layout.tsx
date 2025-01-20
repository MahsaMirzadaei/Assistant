import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Assistant",
  description: "Easy to do your home stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
