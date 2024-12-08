import { z } from "@hono/zod-openapi";

// The output from the route
export const UserSchema = z.object({
    id: z.string().min(1).max(10).openapi({
        example: "123",
    }),
    name: z.string().openapi({
        example: "Akash Pawar",
    }),
    age: z.number().openapi({
        example: 22,
    }),
}).openapi('User');