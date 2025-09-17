import type { ComponentProps } from "react";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";
import Input from "../Input";

type PropTypes<T extends FieldValues> = {
	controlled: UseControllerProps<T>;
} & ComponentProps<typeof Input>;

const ControlledInput = <T extends FieldValues>({
	controlled,
	...restProps
}: PropTypes<T>) => {
	const { field } = useController(controlled);

	return <Input {...field} {...restProps} />;
};

export default ControlledInput;
