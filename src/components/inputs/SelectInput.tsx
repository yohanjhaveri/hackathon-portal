import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Highlight,
  Select,
} from "@chakra-ui/react";

export type SelectInputProps = {
  name: string;
  label?: string;
  value: string;
  error?: string;
  maxW?: string;
  helper?: string;
  options: {
    label: string;
    value: string;
  }[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
};

export const SelectInput = ({
  name,
  label,
  value,
  error,
  maxW,
  helper,
  options,
  required,
  disabled,
  placeholder,
  onChange,
}: SelectInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
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
      <Select value={value} placeholder={placeholder} isDisabled={disabled} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        helper && <FormHelperText>{helper}</FormHelperText>
      )}
    </FormControl>
  );
};
