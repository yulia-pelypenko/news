import type { FC } from "react";
import { AuthNavigation } from "@/modules/auth/components";
import { Logo, ThemeToggleButton } from "@/modules/common/components";

const Header: FC = () => {
	return (
		<header className="w-full bg-white dark:bg-gray-900 shadow px-6 py-4 flex items-center justify-between">
			<Logo />
			<div className="flex items-center gap-4">
				<AuthNavigation />
				<ThemeToggleButton />
			</div>
		</header>
	);
};

export default Header;
