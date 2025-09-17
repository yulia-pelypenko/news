import { z } from "zod";

export const loginSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = loginSchema.extend({
	name: z.string().min(2, "Name must be at least 2 characters"),
});

export type loginData = z.infer<typeof loginSchema>;
export type SignUpData = z.infer<typeof signUpSchema>;
