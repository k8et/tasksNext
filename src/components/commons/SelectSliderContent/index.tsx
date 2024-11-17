import React, { useState } from 'react';
import { SelectItem } from "@nextui-org/react";
import CustomSelect from "@/shared/ui/Selected";

type User = {
    id: number;
    name: string;
    email: string;
};

const users: User[] = [
    { id: 1, name: "name", email: "1.doe@example.com" },
    { id: 2, name: "name2", email: "2@example.com" },
    { id: 3, name: "name3", email: "3@example.com" },
    { id: 4, name: "name4", email: "4.doe@example.com" },
    { id: 5, name: "name5", email: "5@example.com" },
    { id: 6, name: "name6", email: "6@example.com" },
    { id: 7, name: "name7", email: "7.doe@example.com" },
    { id: 8, name: "name8", email: "8@example.com" },
    { id: 9, name: "name9", email: "9@example.com" },
];

export const data = [
    { key: "Exemples", label: "Exemples" },
    { key: "Exemples2", label: "Exemples2" },
    { key: "Exemples3", label: "Exemples3" },
    { key: "Exemples4", label: "Exemples4" },
];

const SelectSliderContent = () => {
    const [selectedUser, setSelectedUser] = useState<string>("");
    console.log(selectedUser, "selectedUser");

    const handleUserChange = (value: string) => {
        setSelectedUser(value);
    };

    return (
        <div className="flex justify-center items-center gap-3 w-full flex-wrap rounded-lg text-white px-3">
            <CustomSelect
                label="Exemples"
                placeholder="Select an animal"
                className="max-w-xs"
                color={"primary"}
                scrollShadowProps={{
                    isEnabled: false
                }}
            >
                {data.map((animal) => (
                    <SelectItem className={"bg-black"} color={"primary"} key={animal.key} value={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </CustomSelect>

            <CustomSelect
                className="max-w-xs"
                label="Exemples"
                placeholder="Select a user"
                value={selectedUser}
                onChange={(e) => handleUserChange(e.target.value)}
                scrollShadowProps={{
                    isEnabled: true
                }}
            >
                {users.map((item) => (
                    <SelectItem className={"text-black"} key={item.id} value={item.email}>
                        {item.name}
                    </SelectItem>
                ))}
            </CustomSelect>
        </div>
    );
};

export default SelectSliderContent;
