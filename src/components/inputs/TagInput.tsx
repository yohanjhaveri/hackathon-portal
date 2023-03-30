import { useEffect, useState } from "react";
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
  maxTags?: number;
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
  maxTags = Number.MAX_SAFE_INTEGER,
  helper,
  required,
  disabled,
  onChange,
}: TagInputProps) => {
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");

  const handleAdd = () => {
    const text = val.trim();

    if (!val) {
      return;
    }

    if (value.length >= maxTags) {
      setErr(`Cannot exceed ${maxTags} tags`);
      return;
    }

    if (value.find((v) => v.toLowerCase() === text.toLowerCase())) {
      setErr("Cannot add duplicate tags");
      return;
    }

    onChange(name, value.concat(text).slice(0, maxTags));
    setVal("");
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

  useEffect(() => {
    setErr("");
  }, [value]);

  return (
    <Box>
      <TextInput
        name=""
        label={label}
        value={val}
        error={err || error}
        maxW={maxW}
        disabled={disabled}
        helper={helper}
        required={required}
        onChange={(_, v) => setVal(v)}
        onKeyDown={handleKeyDown}
        rightElement={
          <InputRightElement width="4rem">
            <Tooltip
              label={
                !val
                  ? "Cannot add empty text"
                  : value.length >= maxTags
                  ? `Cannot exceed ${maxTags} tags`
                  : ""
              }
            >
              <Button h="1.75rem" size="sm" isDisabled={!val || Boolean(err)} onClick={handleAdd}>
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
