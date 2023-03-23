import { useState } from "react";
import { Box, Button, Center, Flex, Heading, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";

import { TagInput } from "../../components/reusable/TagInput";
import { TextInput } from "../../components/reusable/TextInput";
import { SelectInput } from "../../components/reusable/SelectInput";
import { TextareaInput } from "../../components/reusable/TextareaInput";
import { FlowWrapper } from "../../components/reusable/FlowWrapper";
import { ConfirmationModal } from "../../components/reusable/ConfirmationModal";

import { createParticipant } from "../../../../api/mutators/create-participant";
import { triggerFailureToast } from "../../../../utils/toasts";
import { emailToId, locations, timezones } from "../../../../config";

import type { User } from "firebase/auth";
import type { Location, Participant, Timezone } from "../../../../types";

type RegistrationValues = {
  location: Location | "";
  timezone: Timezone | "";
  position: string;
  linkedin: string;
  summary: string;
  skills: string[];
};

type RegistrationErrors = {
  location: string;
  timezone: string;
  position: string;
};

export type RegistrationFormPageProps = {
  user: User;
};

export const RegistrationFormPage = ({ user }: RegistrationFormPageProps) => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const emptyOption = [{ label: "", value: "" }];
  const locationOptions = emptyOption.concat(locations.map((t) => ({ label: t, value: t })));
  const timezoneOptions = emptyOption.concat(timezones.map((t) => ({ label: t, value: t })));

  const [values, setValues] = useState<RegistrationValues>({
    location: "",
    timezone: "",
    position: "",
    linkedin: "",
    summary: "",
    skills: [],
  });
  const [errors, setErrors] = useState<RegistrationErrors>({
    location: "",
    timezone: "",
    position: "",
  });

  const getError = (name: string, value: any) => {
    return (
      {
        location: !value ? "Location is a required field" : "",
        timezone: !value ? "Timezone is a required field" : "",
        position: !value ? "Position is a required field" : "",
      }[name] || ""
    );
  };

  const onChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: getError(name, value) }));
  };

  const onClick = () => {
    const errMessages = {
      location: getError("location", values.location),
      timezone: getError("timezone", values.timezone),
      position: getError("position", values.position),
    };

    if (errMessages.location || errMessages.timezone || errMessages.position) {
      setErrors(errMessages);

      triggerFailureToast(toast, {
        title: "Invalid Fields",
        description: "Please check your inputs and correct any invalid fields",
      });

      return;
    }

    onOpen();
  };

  const onSubmit = async () => {
    if (!user.email || !user.displayName || !values.location || !values.timezone) {
      return;
    }

    const id = emailToId(user.email);

    const formData: Participant = {
      id,
      name: user.displayName,
      email: user.email,
      summary: values.summary,
      position: values.position,
      linkedin: values.linkedin,
      location: values.location,
      timezone: values.timezone,
      skills: values.skills,
    };

    createParticipant(formData).catch(() => {
      triggerFailureToast(toast, {
        title: "Error",
        description: "Oh no! An error occured :(",
      });
    });
  };

  return (
    <FlowWrapper>
      {isOpen && (
        <ConfirmationModal
          title="Confirm Submission"
          body="Please ensure your details are accurate as you cannot make further changes once the form is submitted"
          action="Continue"
          onClose={onClose}
          onClick={onSubmit}
        />
      )}
      <Center>
        <Box padding="50px">
          <Box mb="30px" maxW="600px">
            <Heading size="xs" mt="50px">
              Hello {user.displayName?.split(" ")[0]}!
            </Heading>
            <Text color="blue.500" mb="20px">
              {user.email}
            </Text>
            <Text color="muted"></Text>
          </Box>
          <Box
            boxSizing="border-box"
            bg="white"
            borderRadius="lg"
            borderWidth="1px"
            borderColor="gray.200"
            maxW={{ md: "800px" }}
            p="20px"
          >
            <Stack w={{ md: "600px" }} spacing="12" px="6" py="6">
              <TextInput label="Name" value={user.displayName || ""} maxW="400px" required readOnly />
              <TextInput label="Email" value={user.email || ""} maxW="400px" required readOnly />

              <TextInput
                name="position"
                label="Role"
                value={values.position}
                error={errors.position}
                onChange={onChange}
                maxW="400px"
                required
              />

              <SelectInput
                name="location"
                label="Location"
                value={values.location}
                error={errors.location}
                options={locationOptions}
                onChange={onChange}
                maxW="400px"
                required
              />

              <SelectInput
                name="timezone"
                label="Timezone"
                value={values.timezone}
                error={errors.timezone}
                options={timezoneOptions}
                onChange={onChange}
                maxW="400px"
                required
              />

              <TagInput
                name="skills"
                label="Technical Skills (max 3)"
                value={values.skills}
                onChange={onChange}
                maxW="400px"
              />

              <TextInput
                name="linkedin"
                label="LinkedIn URL"
                value={values.linkedin}
                onChange={onChange}
                maxW="400px"
              />

              <TextareaInput
                name="summary"
                label="Profile Summary"
                value={values.summary}
                onChange={onChange}
                maxLength={300}
                helper={`${300 - values.summary.length} characters remaining`}
              />
            </Stack>
          </Box>
          <Flex gap="10px" justify="flex-end" mt="20px">
            <Button variant="primary" isLoading={false} onClick={onClick}>
              Complete Registration
            </Button>
          </Flex>
        </Box>
      </Center>
    </FlowWrapper>
  );
};
