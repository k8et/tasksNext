import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import React, { ReactNode, forwardRef, Ref } from "react";

type CustomCheckboxProps = {
    defaultSelected?: boolean;
    children?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "faded" | "solid" | "shadow";
    classNames?: {
        base?: string;
        content?: string;
    };
    customStyles?: {
        isSelected?: boolean;
        isFocusVisible?: boolean;
    };
};

const checkboxStyles = tv({
    slots: {
        base: "border-default hover:bg-default-200",
        content: "text-default-500",
    },
    variants: {
        isSelected: {
            true: {
                base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
                content: "text-primary-foreground pl-1",
            },
        },
        isFocusVisible: {
            true: {
                base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
            },
        },
    },
});

const CustomCheckbox = forwardRef<HTMLDivElement, CustomCheckboxProps>(
    (
        {
            defaultSelected = false,
            children,
            startContent,
            endContent,
            color = "default",
            variant = "flat",
            classNames = {},
            customStyles = {},
        },
        ref
    ) => {
        const {
            isSelected,
            isFocusVisible,
            getBaseProps,
            getLabelProps,
            getInputProps,
        } = useCheckbox({
            defaultSelected,
        });

        const styles = checkboxStyles({
            isSelected: isSelected || customStyles.isSelected,
            isFocusVisible: isFocusVisible || customStyles.isFocusVisible,
        });


        return (
            <label {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <Chip
                    // @ts-expect-error: ignore.
                    ref={ref as Ref<HTMLDivElement>}
                    classNames={{
                        base: `${styles.base()} ${classNames.base || ""}`,
                        content: `${styles.content()} ${classNames.content || ""}`,
                    }}
                    color={color}
                    startContent={isSelected && startContent ? startContent : undefined}
                    endContent={endContent}
                    variant={variant}
                    {...getLabelProps()}
                >
                    {children || (isSelected ? "Enabled" : "Disabled")}
                </Chip>

            </label>
        );
    }
);

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
