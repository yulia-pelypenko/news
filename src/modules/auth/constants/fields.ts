import { ControlledInput } from "modules/common/components";

export const AuthFields = {
	Email: "email",
	Password: "password",
	Name: "name",
} as const;

export const nameField = {
	label: "Name",
	placeholder: "Enter your name",
	name: AuthFields.Name,
	Component: ControlledInput,
	type: "text",
	errorsEnabled: true,
};

export const emailField = {
	label: "Email",
	placeholder: "Enter your email",
	name: AuthFields.Email,
	Component: ControlledInput,
	type: "email",
	errorsEnabled: true,
};

export const passwordField = {
	label: "Password",
	placeholder: "Enter your password",
	name: AuthFields.Password,
	Component: ControlledInput,
	type: "password",
	errorsEnabled: true,
};
