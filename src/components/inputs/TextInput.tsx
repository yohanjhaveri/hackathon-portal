import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Highlight,
  Input,
  InputGroup,
} from "@chakra-ui/react";

export type TextInputProps = {
  name?: string;
  label?: string;
  value: string;
  error?: string;
  maxW?: string;
  helper?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (name: string, value: string) => void;
  onKeyDown?: (key: string) => void;
  rightElement?: React.ReactNode;
};

export const TextInput = ({
  name = "",
  label,
  value,
  error,
  maxW,
  helper,
  required,
  disabled,
  readOnly,
  onChange = () => {},
  onKeyDown = () => {},
  rightElement,
}: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e.key);
  };

  return (
    <FormControl isInvalid={Boolean(error)} maxW={maxW}>
      {label && (
        <FormLabel>
          {label}{" "}
          {required && (
            <Highlight query="*" styles={{ color: "red.500" }}>
              *
            </Highlight>
          )}
        </FormLabel>
      )}
      <InputGroup>
        <Input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          isDisabled={disabled}
          isReadOnly={readOnly}
        />
        {rightElement}
      </InputGroup>
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        helper && <FormHelperText>{helper}</FormHelperText>
      )}
    </FormControl>
  );
};
