import type { FC } from "react";
import LogoIcon from "../../../../assets/img/news-logo.svg?react";

const Logo: FC = () => {
	return (
		<div className="flex items-center space-x-2">
			<LogoIcon className="h-9 w-auto" />
		</div>
	);
};

export default Logo;
