import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullable(),
  password: z.string(),
});

export const UsersResponseSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
export type UsersResponse = z.infer<typeof UsersResponseSchema>;
