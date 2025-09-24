import { create } from "zustand";
import type { IUser } from "../interfaces";

type AuthState = {
	user: IUser | null;
	setUser: (user: IUser) => void;
	clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	clearUser: () => set({ user: null }),
}));
