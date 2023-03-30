import { FiSearch } from "react-icons/fi";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export type SearchInputProps = {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
};

export const SearchInput = ({ name, value, onChange }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <InputGroup flex="1" maxW="400px">
      <InputLeftElement pointerEvents="none">
        <Icon as={FiSearch} color="muted" boxSize="5" />
      </InputLeftElement>
      <Input
        value={value}
        placeholder="Search"
        bg="gray.100"
        borderColor="gray.300"
        _placeholder={{ fontWeight: "medium" }}
        onChange={handleChange}
      />
    </InputGroup>
  );
};
