import { initTRPC } from '@trpc/server';

// Initialize TRPC instance
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;