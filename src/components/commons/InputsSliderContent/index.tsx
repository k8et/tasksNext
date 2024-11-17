import React from 'react';
import CustomInput from "@/shared/ui/Input";

const InputsSliderContent = () => {

    return (
        <div
            className="flex justify-center items-center  gap-3  w-full flex-wrap rounded-lg text-white px-3">
            <CustomInput
                size="md"
                color={"primary"}
                label="Examples"
                className="max-w-[220px]"
                onChange={(e) => console.log("Example:", e.target.value)}
            />
            <CustomInput
                variant="underlined"
                color="success"
                size="lg"
                label="Examples"
                placeholder="Examples"
                isRequired
                className="max-w-[220px]"

                onChange={(e) => console.log("Example:", e.target.value)}
            />
            <CustomInput
                variant="flat"
                color="warning"
                size="sm"
                isReadOnly
                label="Examples"
                placeholder="isReadOnly"
                className="max-w-[220px]"
                onChange={(e) => console.log("Example:", e.target.value)}
            />
            <CustomInput
                color={"secondary"}
                label="Examples"
                placeholder="Examples"
                className="max-w-[220px]"
                onChange={(e) => console.log("Example:", e.target.value)}
            />
            <CustomInput
                variant="bordered"
                color="danger"
                size="lg"
                placeholder="Examples"
                className="max-w-[220px]"
                ariaLabel="Message Input"
                onChange={(e) => console.log("Example:", e.target.value)}
            />
        </div>
    );
};

export default InputsSliderContent;
