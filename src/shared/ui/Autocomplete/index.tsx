import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {FC} from "react";
import { users, User } from "@/utils/mock";

interface CustomAutocompleteProps {
    setSelectedUserName: (userName: string | null) => void;
}

const CustomAutocomplete: FC<CustomAutocompleteProps> = ({ setSelectedUserName }) => {
    const handleSelectionChange = (selectedKey: any | null) => {
        if (selectedKey === null) return;

        const selectedIndex = typeof selectedKey === 'number' ? selectedKey : -1;

        if (selectedIndex >= 0 && selectedIndex < users.length) {
            const selectedItem: User = users[selectedIndex];
            setSelectedUserName(selectedItem.exemple1);
        }
    };

    return (
        <div>
            <Autocomplete
                classNames={{
                    base: "max-w-xs",
                    listboxWrapper: "max-h-[320px]",
                }}
                defaultItems={users}
                inputProps={{
                    classNames: {
                        input: "ml-1",
                        inputWrapper: "h-[48px]",
                    },
                }}
                listboxProps={{
                    hideSelectedIcon: true,
                    itemClasses: {
                        base: [
                            "rounded-medium",
                            "text-default-500",
                            "transition-opacity",
                            "data-[hover=true]:text-foreground",
                            "dark:data-[hover=true]:bg-default-50",
                            "data-[pressed=true]:opacity-70",
                            "data-[hover=true]:bg-default-200",
                            "data-[selectable=true]:focus:bg-default-100",
                            "data-[focus-visible=true]:ring-default-500",
                        ],
                    },
                }}
                aria-label="Select an employee"
                placeholder="Enter employee name"
                popoverProps={{
                    offset: 10,
                    classNames: {
                        base: "rounded-large",
                        content: "p-1 border-small border-default-100 bg-background",
                    },
                }}
                radius="full"
                variant="bordered"
                onSelectionChange={handleSelectionChange}
            >
                {(item) => (
                    <AutocompleteItem key={item.id} textValue={item.exemple1}>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="flex flex-col">
                                    <span className="text-small">{item.exemple1}</span>
                                    <span className="text-tiny text-default-400">{item.titleExample}</span>
                                </div>
                            </div>
                        </div>
                    </AutocompleteItem>
                )}
            </Autocomplete>
        </div>
    );
};

export default CustomAutocomplete;
