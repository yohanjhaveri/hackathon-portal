import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Highlight,
  Stack,
} from "@chakra-ui/react";

type Options = {
  label: string;
  value: string;
};

type CheckboxInputProps = {
  name: string;
  label?: string;
  value: string[];
  error?: string;
  helper?: string;
  options: Options[];
  required?: boolean;
  onChange: (name: string, value: string) => void;
};

export const CheckboxInput = ({
  name,
  label,
  value,
  error,
  helper,
  options,
  required,
  onChange,
}: CheckboxInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={Boolean(error)}>
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
      <CheckboxGroup value={value}>
        <Stack direction="column">
          {options.map((option) => (
            <Checkbox key={option.value} value={option.value} onChange={handleChange} colorScheme="brand">
              {option.label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        helper && <FormHelperText>{helper}</FormHelperText>
      )}
    </FormControl>
  );
};
