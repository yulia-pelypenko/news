import type { FC } from "react";
import { MainLayout } from "@/modules/layout/components";
import SignUpForm from "../../components/SignUpForm";

const SignUpPage: FC = () => {
	return (
		<MainLayout>
			<h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 my-4">
				SignUp
			</h1>
			<SignUpForm />
		</MainLayout>
	);
};

export default SignUpPage;
