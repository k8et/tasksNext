import {Select} from "@nextui-org/react";
import React, {ReactNode} from "react";

type CustomSelectProps<T> = {
    label: string;
    placeholder: string;
    className?: string;
    children?: ReactNode;
    classNameSelect?: string;
} & React.ComponentProps<typeof Select>;

function CustomSelect<T>(props: CustomSelectProps<T>) {
    const {
        label,
        placeholder,
        className,
        classNameSelect,
        children,
        ...rest
    } = props

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
