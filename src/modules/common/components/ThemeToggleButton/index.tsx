import type { FC } from "react";
import MoonIcon from "@/assets/img/moon.svg?react";
import SunIcon from "@/assets/img/sun.svg?react";
import { useTheme } from "../../hooks";

const ThemeToggleButton: FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 
           flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition"
		>
			{theme === "dark" ? (
				<SunIcon className="w-5 h-5" />
			) : (
				<MoonIcon className="w-5 h-5" />
			)}
		</button>
	);
};

export default ThemeToggleButton;
