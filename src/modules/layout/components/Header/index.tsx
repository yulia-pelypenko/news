import type { FC } from "react";
import { AuthNavigation } from "@/modules/auth/components";
import { Logo } from "@/modules/common/components";

const Header: FC = () => {
	return (
		<header className="w-full bg-white dark:bg-gray-900 shadow px-6 py-4 flex items-center justify-between">
			<Logo />
			<AuthNavigation />
		</header>
	);
};

export default Header;
