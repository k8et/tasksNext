import {ReactNode} from "react";
import {Button} from "@nextui-org/button";

type ButtonProps = {
    variant?: "primary" | "secondary";
    children: ReactNode;
    className?: string
};

const CustomButton = (props: ButtonProps) => {
    const {variant = "primary", className, ...rest} = props;
    const classes: { [key in "primary" | "secondary"]: string } = {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-black",
    };

    return (
        <Button
            className={`${classes[variant]} ${className} `}
            {...rest}
        >
            {props.children}
        </Button>
    );
};

export default CustomButton;
