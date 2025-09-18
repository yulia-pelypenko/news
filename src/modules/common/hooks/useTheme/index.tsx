import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const saved = localStorage.getItem("theme") as Theme | null;
		if (saved === "dark") {
			document.documentElement.classList.add("dark");
			setTheme("dark");
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("light");
		}
	}, []);

	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");

		if (document.documentElement.classList.contains("dark")) {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	};

	return { theme, toggleTheme };
};

export default useTheme;
