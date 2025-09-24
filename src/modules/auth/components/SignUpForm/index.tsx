import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { Button, Loader } from "@/modules/common/components";
import FormErrorMessage from "@/modules/common/components/FormErrorMessage.ts";
import { emailField, nameField, passwordField } from "../../constants/fields";
import { useRegister } from "../../hooks/useRegister";
import { type SignUpData, signUpSchema } from "../../validation/schemas";

const SignUpForm: FC = () => {
	const { mutate: register, isPending, error } = useRegister();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = (data: SignUpData) => {
		register(data);
	};

	const fields = [nameField, emailField, passwordField];

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="w-full max-w-sm mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-5"
		>
			{fields.map((field) => (
				<div key={field.name} className="flex flex-col space-y-1">
					<label
						htmlFor={field.name}
						className="text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						{field.label}
					</label>

					<field.Component
						controlled={{ name: field.name, control }}
						id={field.name}
						placeholder={field.placeholder}
						type={field.type}
						className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
					/>

					<div className="h-2">
						{field.errorsEnabled && errors[field.name] && (
							<p className="text-xs text-red-500">
								{errors[field.name]?.message}
							</p>
						)}
					</div>
				</div>
			))}

			<Button
				type="submit"
				className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
			>
				{isPending ? <Loader size="sm" /> : "	Register"}
			</Button>
			<div className="h-1">{error && <FormErrorMessage error={error} />}</div>
		</form>
	);
};

export default SignUpForm;
