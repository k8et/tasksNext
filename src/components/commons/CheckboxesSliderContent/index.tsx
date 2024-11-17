import React from 'react';
import {Checkbox} from "@nextui-org/react";
import CustomCheckbox from "@/shared/ui/Checkbox";

const AutocompleteSliderContent = () => {
    return (
        <div
            className="flex justify-center items-center  gap-3  w-full flex-wrap rounded-lg text-white px-3">
            <Checkbox defaultSelected color="primary">Primary</Checkbox>
            <Checkbox defaultSelected color="danger">Danger</Checkbox>
            <CustomCheckbox
                defaultSelected={false}
                startContent={
                    <div className={"text-2xl"}>
                        +
                    </div>
                }
                children="Add New"
            />
            <CustomCheckbox
                color="success"
                startContent={<div>✅</div>}
                children="Success Checkbox"
                classNames={{
                    base: "bg-blue-500",
                    content: "text-black",
                }}

            />
            <CustomCheckbox
                defaultSelected={true}
            />
        </div>
    );
};

export default AutocompleteSliderContent;
