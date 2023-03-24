import { FiSearch } from "react-icons/fi";
import { Button, HStack, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaUndo } from "react-icons/fa";
import { defaultValue, useFilters } from "../../../../context/FiltersContext";
import { filtersSchema } from "../../../../utils/filtering";
import { FiltersSchema } from "../../../../types";
import { FilterCheckbox } from "../../components/reusable/FilterCheckbox";

export const ParticipantFilters = () => {
  const filters = useFilters();
  const applied = filters?.applied;

  const filtersOrder: (keyof FiltersSchema)[] = ["location", "timezone", "status"];

  if (!applied) {
    return null;
  }

  return (
    <HStack justify="space-between" wrap="wrap">
      <InputGroup flex="1" maxW="400px">
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="muted" boxSize="5" />
        </InputLeftElement>
        <Input
          value={filters?.applied.search}
          placeholder="Search"
          bg="gray.100"
          borderColor="gray.300"
          _placeholder={{ fontWeight: "medium" }}
          onChange={(e) => filters?.onUpdate("search", e.target.value)}
        />
      </InputGroup>
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
