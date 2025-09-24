import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth.services";
import { useAuthStore } from "../store/useAuthStore";
import type { loginData } from "../validation/schemas";

export function useLogin() {
	const setUser = useAuthStore((state) => state.setUser);
	return useMutation({
		mutationFn: (data: loginData) => login(data),
		onSuccess: (user) => {
			setUser(user);
		},
	});
}
