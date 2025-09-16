import type { ComponentProps } from "react";
import { useController } from "react-hook-form";
import type { UseControllerProps, FieldValues } from "react-hook-form";
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
