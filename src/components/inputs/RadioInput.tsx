import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Highlight,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export type RadioInputProps = {
  name: string;
  label?: string;
  value: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
  helper?: string;
  required?: boolean;
  onChange: (n: string, v: string) => void;
};

export const RadioInput = ({
  name,
  label,
  value,
  error,
  options,
  helper,
  required,
  onChange,
}: RadioInputProps) => (
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
    <RadioGroup value={value} onChange={(value) => onChange(name, value)}>
      <Stack direction="column">
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
    {error ? (
      <FormErrorMessage>{error}</FormErrorMessage>
    ) : (
      helper && <FormHelperText>{helper}</FormHelperText>
    )}
  </FormControl>
);
