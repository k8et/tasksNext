import { Select } from "@nextui-org/react";
import React, { ReactNode } from "react";

type CustomSelectProps = {
    label: string;
    placeholder: string;
    className?: string;
    children?: ReactNode;
} & React.ComponentProps<typeof Select>;

function CustomSelect(props: CustomSelectProps) {
    const {
        label,
        placeholder,
        className,
        children,
        ...rest
    } = props;

    return (
        <Select
            className={className}
            label={label}
            placeholder={placeholder}
            {...rest}
        >
            {children}
        </Select>
    );
}

export default CustomSelect;
