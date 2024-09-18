// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import AppLayout from "@/components/layouts/AppLayout";
import { ColorSchemeScript } from "@mantine/core";

import ClientProviders from "./providers";
// Our own styles
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* NOTE ColorSchemeScript is to prevent FART (flash of inaccurate colour scheme) in SSR. `defaultColorScheme` in both ColorSchemeScript in MantineProvider must match */}
        <ColorSchemeScript />
      </head>
      <body>
        <ClientProviders>
          <AppLayout>{children}</AppLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
