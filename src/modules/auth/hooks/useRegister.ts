import { useMutation } from "@tanstack/react-query";
import { register } from "../services/auth.services";
import type { SignUpData } from "../validation/schemas";

export function useRegister() {
	return useMutation({
		mutationFn: (data: SignUpData) => register(data),
	});
}
