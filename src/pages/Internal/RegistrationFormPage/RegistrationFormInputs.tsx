import { Box, Stack } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { SelectInput } from "../../../components/inputs/SelectInput";
import { TagInput } from "../../../components/inputs/TagInput";
import { TextInput } from "../../../components/inputs/TextInput";
import { TextareaInput } from "../../../components/inputs/TextareaInput";
import { locations, timezones } from "../../../config";
import { RegistrationErrors, RegistrationValues } from "./RegistrationFormPage";

export type RegistrationFormInputsProps = {
  user: User;
  values: RegistrationValues;
  errors: RegistrationErrors;
  onChange: (name: string, value: any) => void;
};

export const RegistrationFormInputs = ({ user, values, errors, onChange }: RegistrationFormInputsProps) => {
  const emptyOption = [{ label: "", value: "" }];
  const locationOptions = emptyOption.concat(locations.map((l) => ({ label: l, value: l })));
  const timezoneOptions = emptyOption.concat(timezones.map((t) => ({ label: t, value: t })));

  const MAX_SUMMARY_LENGTH = 300;

  return (
    <Box p="5" bg="white" borderRadius="lg" borderWidth="1px" borderColor="gray.200">
      <Stack p="6" spacing="12">
        <TextInput label="Name" value={user.displayName || ""} maxW="96" required disabled />

        <TextInput label="Email" value={user.email || ""} maxW="96" required disabled />

        <TextInput
          name="position"
          label="Role"
          value={values.position}
          error={errors.position}
          onChange={onChange}
          maxW="96"
          required
        />

        <SelectInput
          name="location"
          label="Location"
          value={values.location}
          error={errors.location}
          options={locationOptions}
          onChange={onChange}
          maxW="96"
          required
        />

        <SelectInput
          name="timezone"
          label="Timezone"
          value={values.timezone}
          error={errors.timezone}
          options={timezoneOptions}
          onChange={onChange}
          maxW="96"
          required
        />

        <TextInput
          name="linkedin"
          label="LinkedIn URL"
          value={values.linkedin}
          error={errors.linkedin}
          onChange={onChange}
          maxW="96"
        />

        <TagInput
          name="skills"
          label="Technical Skills (max 3)"
          value={values.skills}
          error={errors.skills}
          onChange={onChange}
          maxW="96"
          maxTags={3}
        />

        <TextareaInput
          name="summary"
          label="Profile Summary"
          value={values.summary}
          onChange={onChange}
          maxLength={MAX_SUMMARY_LENGTH}
          helper={`${MAX_SUMMARY_LENGTH - values.summary.length} characters remaining`}
        />
      </Stack>
    </Box>
  );
};
