import { Stack } from "@chakra-ui/react";
import { TextInput } from "../../../../components/inputs/TextInput";
import { TextareaInput } from "../../../../components/inputs/TextareaInput";
import { Errors, Values } from "./TeamFormPage";

export type TeamFormInputsProps = {
  edit?: boolean;
  values: Values;
  errors: Errors;
  onChange: (name: string, value: string) => void;
};

export const TeamFormInputs = ({ edit, values, errors, onChange }: TeamFormInputsProps) => (
  <Stack p="6" spacing="8">
    <TextInput
      name="id"
      label="Team ID"
      value={values.id}
      error={errors.id}
      onChange={onChange}
      maxW="200px"
      required
      disabled={edit}
    />
    <TextInput
      name="name"
      label="Team Name"
      value={values.name}
      error={errors.name}
      onChange={onChange}
      maxW="300px"
      required
    />
    <TextareaInput
      name="idea"
      label="Team Idea"
      value={values.idea}
      error={errors.idea}
      onChange={onChange}
      required
    />
  </Stack>
);
