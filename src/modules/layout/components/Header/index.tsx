import type { FC } from "react";
import { Link } from "react-router";
import { Routes } from "@/config/routes";
import { AuthNavigation } from "@/modules/auth/components";
import { Logo, ThemeToggleButton } from "@/modules/common/components";

const Header: FC = () => {
	return (
		<header className="w-full bg-white dark:bg-gray-900 shadow px-6 py-4 flex items-center justify-between">
			<Link to={Routes.News}>
				<Logo />
			</Link>
			<div className="flex items-center gap-4">
				<AuthNavigation />
				<ThemeToggleButton />
			</div>
		</header>
	);
};

export default Header;
