import "./globals.css";

export const metadata = {
  title: "Lovey Dovey 💕",
  description: "Cute pixel love website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}