import { FaChevronDown } from "react-icons/fa";
import { HStack, Icon, PopoverTrigger, Text } from "@chakra-ui/react";

type FilterPopoverButtonProps = {
  label: string;
};

export const FilterPopoverButton = ({ label }: FilterPopoverButtonProps) => (
  <PopoverTrigger>
    <HStack
      as="button"
      position="relative"
      borderWidth="1px"
      borderColor="gray.300"
      zIndex="11"
      rounded="lg"
      px="3"
      py="2"
      spacing="1"
      _expanded={{ bg: "gray.50" }}
    >
      <Text color="gray.600" fontWeight="medium" pr="2">
        {label}
      </Text>
      <Icon as={FaChevronDown} position="relative" top="1px" fontSize="xs" color="gray.500" />
    </HStack>
  </PopoverTrigger>
);
