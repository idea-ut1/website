/* eslint-disable @next/next/no-head-element */
import Providers from "@/components/providers";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>IDeA</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="IDeA" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
