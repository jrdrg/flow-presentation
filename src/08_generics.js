// @flow

type DropdownOption<T> = {
    value: T,
    label: string
};


const numberOption: DropdownOption<number> = { value: 123, label: "123" };

const stringOption: DropdownOption<string> = { value: "123", label: "123" };
