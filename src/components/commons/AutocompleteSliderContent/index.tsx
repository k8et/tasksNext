import React, {useState} from 'react';
import CustomAutocomplete from "@/shared/ui/Autocomplete";

const AutocompleteSliderContent = () => {
    const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
    console.log(selectedUserName, "selectedUserName")

    return (
        <div className="flex justify-center items-center  gap-3  w-full flex-wrap rounded-lg text-white px-3">
            <CustomAutocomplete setSelectedUserName={setSelectedUserName}/>
        </div>
    );
};

export default AutocompleteSliderContent;
