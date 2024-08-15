import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

// Create a server-side TRPC client for API calls
export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});