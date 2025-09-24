import type { FC } from "react";

type Props = {
	error: Error | null;
};

const FormErrorMessage: FC<Props> = ({ error }) => {
	const defaultMessage = "Something went wrong. Please try again.";

	return (
		<p className="text-sm text-red-500 text-center">
			{error?.message || defaultMessage}
		</p>
	);
};

export default FormErrorMessage;
