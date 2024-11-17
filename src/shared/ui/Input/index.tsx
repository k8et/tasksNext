import {Input} from "@nextui-org/react";
import {ChangeEventHandler} from "react";

type CustomInputProps = {
    variant?: "flat" | "bordered" | "underlined" | "faded";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
    size?: "sm" | "md" | "lg";
    label?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    ariaLabel?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
};

const CustomInput = (props: CustomInputProps) => {
    const {
        variant = "flat",
        color = "default",
        size = "md",
        label,
        className,
        ...rest
    } = props
    return (
        <Input
            variant={variant}
            color={color}
            size={size}
            label={label}
            className={className}
            {...rest}
        />
    );
};

export default CustomInput;
