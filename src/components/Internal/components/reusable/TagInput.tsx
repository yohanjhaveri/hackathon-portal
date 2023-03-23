import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  InputRightElement,
  Tag,
  TagCloseButton,
  TagLabel,
  Tooltip,
} from "@chakra-ui/react";
import { TextInput } from "./TextInput";

export type TagInputProps = {
  name: string;
  label?: string;
  value: string[];
  error?: string;
  maxW?: string;
  helper?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (name: string, value: string[]) => void;
};

export const TagInput = ({
  name,
  label,
  value,
  error,
  maxW,
  helper,
  required,
  disabled,
  onChange,
}: TagInputProps) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const n = text.trim();

    if (!n || value.length >= 3 || value.find((v) => v === n)) {
      return;
    }

    onChange(name, value.concat(n).slice(0, 3));
    setText("");
  };

  const handleDelete = (n: string) => {
    onChange(
      name,
      value.filter((v) => v !== n)
    );
  };

  const handleKeyDown = (key: string) => {
    if (key === "Enter") {
      handleAdd();
    }
  };

  return (
    <Box>
      <TextInput
        name=""
        label={label}
        value={text}
        error={error}
        maxW={maxW}
        disabled={disabled}
        helper={helper}
        required={required}
        onChange={(_, v) => setText(v)}
        onKeyDown={handleKeyDown}
        rightElement={
          <InputRightElement width="4rem">
            <Tooltip
              label={!text ? "Cannot add empty text" : value.length >= 3 ? "Cannot exceed 3 tags" : ""}
            >
              <Button h="1.75rem" size="sm" isDisabled={!text || value.length >= 3} onClick={handleAdd}>
                Add
              </Button>
            </Tooltip>
          </InputRightElement>
        }
      />
      <Flex wrap="wrap" mt="2" gap="1.5">
        {value.map((v) => (
          <Tag key={v} colorScheme="brand">
            <TagLabel>{v}</TagLabel>
            {disabled || <TagCloseButton onClick={() => handleDelete(v)} />}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
