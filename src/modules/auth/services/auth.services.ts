import { api } from "@/modules/common/api/client";
import type { IUser } from "../interfaces";
import type { loginData, SignUpData } from "../validation/schemas";

export async function register(data: SignUpData): Promise<IUser> {
	const res = await api.post("/register", data);
	console.log(import.meta.env.VITE_API_URL);
	return res.data;
}

export async function login(data: loginData): Promise<IUser> {
	const res = await api.post("/login", data);
	return res.data;
}
