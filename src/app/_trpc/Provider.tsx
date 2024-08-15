"use client";

import React, { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./client";
import { absoluteUrl } from "@/lib/utils";

// TRPC and React Query provider component
const Provider: FC<{ children: React.ReactNode }> = ({ children }) => {
  // Create a new QueryClient instance
  const [queryClient] = useState(() => new QueryClient());

  // Create a new TRPC client with batch link and API URL
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: absoluteUrl("/api/trpc"),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default Provider;
