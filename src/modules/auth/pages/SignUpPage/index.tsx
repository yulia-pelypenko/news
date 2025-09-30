import type { FC } from "react";
import SignUpForm from "../../components/SignUpForm";

const SignUpPage: FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 my-4">
				SignUp
			</h1>
			<SignUpForm />
		</div>
	);
};

export default SignUpPage;
