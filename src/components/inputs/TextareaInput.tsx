import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Highlight,
  Textarea,
} from "@chakra-ui/react";

export type TextareaInputProps = {
  name: string;
  label?: string;
  value: string;
  error?: string;
  helper?: string;
  maxLength?: number;
  required?: boolean;
  onChange: (name: string, value: string) => void;
};

export const TextareaInput = ({
  name,
  label,
  value,
  error,
  helper,
  maxLength,
  required,
  onChange,
}: TextareaInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <Textarea value={value} onChange={handleChange} maxLength={maxLength} minH="200px" w="100%" />
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        helper && <FormHelperText>{helper}</FormHelperText>
      )}
    </FormControl>
  );
};
