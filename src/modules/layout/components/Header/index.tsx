import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "@/modules/common/components";

const Header: FC = () => {
	// Заглушка
	const user = null;

	return (
		<header className="w-full bg-white dark:bg-gray-900 shadow px-6 py-4 flex items-center justify-between">
			<Logo />
			{user ? (
				<div className="text-gray-700 dark:text-gray-300">
					Hello, <span className="font-semibold">{user}</span>
				</div>
			) : (
				//вынести в auth модуль
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
						Login <span>/</span>
					</NavLink>
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
			)}
		</header>
	);
};

export default Header;
