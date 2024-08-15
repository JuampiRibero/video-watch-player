import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/server";

// Create TRPC React client with the AppRouter type
export const trpc = createTRPCReact<AppRouter>({});
