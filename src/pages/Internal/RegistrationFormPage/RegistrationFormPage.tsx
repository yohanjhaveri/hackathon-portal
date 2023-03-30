import { useState } from "react";
import { Box, Center, useDisclosure, useToast } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { createParticipant } from "../../../api/mutators/create-participant";
import { FlowWrapper } from "../../../components/wrappers/FlowWrapper";
import { Location, Timezone, emailToId, copy } from "../../../config";
import { Participant } from "../../../types";
import {
  getParticipantLinkedinURLError,
  getParticipantLocationError,
  getParticipantPositionError,
  getParticipantSkillsError,
  getParticipantTimezoneError,
  triggerFailureToast,
} from "../../../utils";
import { RegistrationFormButtons } from "./RegistrationFormButtons";
import { RegistrationFormHead } from "./RegistrationFormHead";
import { RegistrationFormInputs } from "./RegistrationFormInputs";
import { RegistrationFormModal } from "./RegistrationFormModal";

export type RegistrationValues = {
  location: Location | "";
  timezone: Timezone | "";
  position: string;
  linkedin: string;
  summary: string;
  skills: string[];
};

export type RegistrationErrors = {
  location: string;
  timezone: string;
  position: string;
  linkedin: string;
  skills: string;
};

export type RegistrationFormPageProps = {
  user: User;
};

export const RegistrationFormPage = ({ user }: RegistrationFormPageProps) => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    linkedin: "",
    skills: "",
  });

  const getError = (name: string, value: any) => {
    const errorFunction = {
      location: getParticipantLocationError,
      timezone: getParticipantTimezoneError,
      position: getParticipantPositionError,
      linkedin: getParticipantLinkedinURLError,
      skills: getParticipantSkillsError,
    }[name];

    if (!errorFunction) {
      return "";
    }

    return errorFunction(value);
  };

  const onChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: getError(name, value) }));
  };

  const onComplete = () => {
    const errMessages = {
      location: getError("location", values.location),
      timezone: getError("timezone", values.timezone),
      position: getError("position", values.position),
      linkedin: getError("linkedin", values.linkedin),
      skills: getError("skills", values.skills),
    };

    if (
      errMessages.location ||
      errMessages.timezone ||
      errMessages.position ||
      errMessages.linkedin ||
      errMessages.skills
    ) {
      setErrors(errMessages);

      triggerFailureToast(toast, {
        title: copy.userRegistrationForm.errors.invalidFields.title.text,
        description: copy.userRegistrationForm.errors.invalidFields.description.text,
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
        title: copy.userRegistrationForm.errors.requestFailed.title.text,
        description: copy.userRegistrationForm.errors.requestFailed.description.text,
      });
    });
  };

  return (
    <FlowWrapper>
      {isOpen && <RegistrationFormModal onClose={onClose} onSubmit={onSubmit} />}
      <Center>
        <Box p="12" maxW="2xl">
          <RegistrationFormHead user={user} />
          <RegistrationFormInputs user={user} values={values} errors={errors} onChange={onChange} />
          <RegistrationFormButtons onComplete={onComplete} />
        </Box>
      </Center>
    </FlowWrapper>
  );
};
