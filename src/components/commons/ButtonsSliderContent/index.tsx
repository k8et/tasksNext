import React from 'react';
import CustomButton from "@/shared/ui/Button";

const ButtonsSliderContent = () => {
    return (
        <div
            className="flex justify-center items-center bg-white/10 gap-3  w-full flex-wrap rounded-lg text-white px-3">
            <CustomButton  variant={"primary"}>Click</CustomButton>
            <CustomButton variant={"secondary"}>Click</CustomButton>
            <CustomButton
                className={"bg-red-500 text-white font-bold hover:bg-white hover:text-black "}>
                Click
            </CustomButton>
        </div>
    );
};

export default ButtonsSliderContent;
