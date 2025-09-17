import type { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className = "", ...rest }) => {
	return (
		<button
			className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors ${className}`}
			{...rest}
		/>
	);
};

export default Button;
