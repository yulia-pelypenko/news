import { ControlledInput } from "@/modules/common/components";

export const UserFields = {
	Email: "email",
	Password: "password",
	Name: "name",
} as const;

export const nameField = {
	label: "Name",
	placeholder: "Enter your name",
	name: UserFields.Name,
	Component: ControlledInput,
	type: "text",
};

export const emailField = {
	label: "Email",
	placeholder: "Enter your email",
	name: UserFields.Email,
	Component: ControlledInput,
	type: "email",
};

export const passwordField = {
	label: "Password",
	placeholder: "Enter your password",
	name: UserFields.Password,
	Component: ControlledInput,
	type: "password",
};
