import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const AuthNavigation: FC = () => {
	const user = useAuthStore((state) => state.user);

	if (user) {
		return (
			<div className="text-gray-700 dark:text-gray-300">
				Hello, <span className="font-semibold">{user.name}</span>
			</div>
		);
	}

	return (
		<nav className="flex items-center space-x-2">
			<NavLink
				to="/login"
				className={({ isActive }) =>
					`hover:text-blue-600 dark:hover:text-blue-400 ${
						isActive
							? "text-blue-600 dark:text-blue-400 underline"
							: "text-gray-700 dark:text-gray-300"
					}`
				}
			>
				Login
			</NavLink>
			<span className="text-gray-700 dark:text-gray-300">/</span>
			<NavLink
				to="/register"
				className={({ isActive }) =>
					`hover:text-blue-600 dark:hover:text-blue-400 ${
						isActive
							? "text-blue-600 dark:text-blue-400 underline"
							: "text-gray-700 dark:text-gray-300"
					}`
				}
			>
				Register
			</NavLink>
		</nav>
	);
};

export default AuthNavigation;
