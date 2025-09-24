import type { FC } from "react";

type LoaderProps = {
	size?: "sm" | "md" | "lg";
};

const sizeMap = {
	sm: "w-5 h-5 border-2",
	md: "w-10 h-10 border-4",
	lg: "w-16 h-16 border-4",
};

const Loader: FC<LoaderProps> = ({ size = "md" }) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div
				className={`${sizeMap[size]} border-blue-500 border-t-transparent rounded-full animate-spin`}
			/>
		</div>
	);
};

export default Loader;
