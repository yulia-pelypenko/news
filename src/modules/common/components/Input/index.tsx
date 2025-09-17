import type { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ ...rest }) => {
	return (
		<input
			className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
			{...rest}
		/>
	);
};

export default Input;
