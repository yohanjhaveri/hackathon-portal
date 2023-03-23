import { useEffect } from "react";
import { Checkbox, CheckboxGroup, Popover, Stack, useCheckboxGroup } from "@chakra-ui/react";
import { useFilters } from "../../../../context/FiltersContext";
import { FilterPopoverButton, FilterPopoverContent } from "./FilterPopover";

export type FilterCheckboxProps = {
  name: string;
  label: string;
  currentValue?: string[];
  defaultValue?: string[];
  options: {
    label: string;
    value: string;
  }[];
};

export const FilterCheckbox = ({
  name,
  label,
  currentValue = [],
  defaultValue = [],
  options,
}: FilterCheckboxProps) => {
  const filters = useFilters();
  const { value, setValue } = useCheckboxGroup({ defaultValue: currentValue });

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  const onReset = () => {
    filters?.onUpdate(name, defaultValue);
  };

  const onApply = () => {
    filters?.onUpdate(name, value);
  };

  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label={label} />
      <FilterPopoverContent
        isResetDisabled={JSON.stringify(defaultValue) === JSON.stringify(currentValue)}
        onClickReset={onReset}
        onClickApply={onApply}
      >
        <Stack as="fieldset" spacing="2">
          <CheckboxGroup value={value} onChange={setValue}>
            {options.map((option) => (
              <Checkbox key={option.value} value={option.value} colorScheme="brand">
                <span>{option.label}</span>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Stack>
      </FilterPopoverContent>
    </Popover>
  );
};
