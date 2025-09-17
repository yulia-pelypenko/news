import type { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="w-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-center py-4 mt-auto">
			<p className="text-sm">© {new Date().getFullYear()} News App.</p>
		</footer>
	);
};

export default Footer;
