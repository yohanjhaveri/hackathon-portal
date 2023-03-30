import { FaUndo } from "react-icons/fa";
import { Button, HStack } from "@chakra-ui/react";
import { FilterCheckbox } from "../../../../components/filter/FilterCheckbox";
import { SearchInput } from "../../../../components/inputs/SearchInput";
import { defaultValue, useFilters } from "../../../../context";
import { FiltersSchema } from "../../../../types";
import { filtersSchema } from "../../../../utils";

export const ParticipantFilters = () => {
  const filters = useFilters();
  const applied = filters?.applied;

  const filtersOrder: (keyof FiltersSchema)[] = ["location", "timezone", "status"];

  if (!applied) {
    return null;
  }

  return (
    <HStack justify="space-between" wrap="wrap">
      <SearchInput name="search" value={applied.search} onChange={filters?.onUpdate} />
      <HStack spacing="2" wrap="wrap">
        {filtersOrder.map((name) => (
          <FilterCheckbox
            key={name}
            name={name}
            currentValue={applied[name]}
            defaultValue={filtersSchema[name].options}
            label={filtersSchema[name].title}
            options={filtersSchema[name].options.map((option) => ({
              value: option,
              label: option,
            }))}
          />
        ))}
        {JSON.stringify(applied) !== JSON.stringify(defaultValue) && (
          <Button variant="solid" colorScheme="brand" leftIcon={<FaUndo />} onClick={filters?.onReset}>
            Reset Filters
          </Button>
        )}
      </HStack>
    </HStack>
  );
};
