"use client";

import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import type { FetchFn } from "@zenstackhq/tanstack-query/runtime";

// import { Provider as ZenStackHooksProvider } from "../lib/hooks";
import { theme } from "./theming";

const queryClient = new QueryClient();

// const myFetch: FetchFn = (url, options) => {
//   options = options ?? {};
//   options.headers = {
//     ...options.headers,
//     "x-my-custom-header": "hello world",
//   };
//   return fetch(url, options);
// };

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ZenStackHooksProvider
        value={{
          endpoint: "/api/model",
          // fetch: myFetch
        }}
      > */}
      <ClerkProvider
        // Fallback redirect after sign in to /library. Clerk will redirect to the provided URL if there is no redirect_url in the querystring
        signInFallbackRedirectUrl="/library"
        // TODO: Force redirect after sign up to /welcome. Clerk will always redirect to provided URL, regardless of what page the user was on before
        signUpForceRedirectUrl="/welcome"
      >
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </ClerkProvider>
      {/* </ZenStackHooksProvider> */}
    </QueryClientProvider>
  );
}
