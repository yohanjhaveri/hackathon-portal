import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, useDisclosure, useToast } from "@chakra-ui/react";
import { useData } from "../../../../context/DataContext";
import { getTeamIdeaError, getTeamIdError, getTeamNameError } from "../../../../utils/validations";
import { editTeam, makeTeam } from "../../../../api/actions";
import { ConfirmationModal } from "../../components/reusable/ConfirmationModal";
import { TeamFormInputs } from "./TeamFormInputs";
import { TeamFormButtons } from "./TeamFormButtons";
import { HeadWrapper } from "../../components/reusable/HeadWrapper";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils/toasts";
import { Loader } from "../../../Loader";
import { isIdeaRegistrationPhaseActive, isTeamRegistrationPhaseActive } from "../../../../constants/env";

export type Values = {
  id: string;
  name: string;
  idea: string;
};

export type Errors = {
  id: string;
  name: string;
  idea: string;
};

export type TeamFormPageProps = {
  edit?: boolean;
};

const defaultValues: Values = {
  id: "",
  name: "",
  idea: "",
};

const defaultErrors: Errors = {
  id: "",
  name: "",
  idea: "",
};

export const TeamFormPage = ({ edit }: TeamFormPageProps) => {
  const data = useData();
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [values, setValues] = useState<Values>(
    edit
      ? {
          id: data?.team?.id || "",
          name: data?.team?.name || "",
          idea: data?.team?.idea || "",
        }
      : defaultValues
  );
  const [errors, setErrors] = useState<Errors>(defaultErrors);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // prevent create team if formation phase is inactive
    if (!isTeamRegistrationPhaseActive && !edit) {
      navigate("teams");
      return;
    }

    // prevent update team if ideation phase is inactive
    if (!isIdeaRegistrationPhaseActive && edit) {
      navigate(`/teams/${data?.team?.id}`);
      return;
    }
  }, []);

  if (!data) {
    return <Loader />;
  }

  const { team, teams, participant } = data;

  const getError = (name: string, value: string) => {
    return (
      {
        id: edit ? "" : getTeamIdError(value, teams),
        name: getTeamNameError(value),
        idea: getTeamIdeaError(value),
      }[name] || ""
    );
  };

  const onChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: getError(name, value) }));
  };

  const onSubmit = async () => {
    setLoading(true);

    const submitFunction = edit
      ? async () => team && editTeam(team, values)
      : async () => participant && makeTeam(teams, participant.id, values);

    submitFunction()
      .then(() => {
        navigate(edit ? `/teams/${data.team?.id}` : "/teams");

        triggerSuccessToast(
          toast,
          edit
            ? {
                title: "Team Updated",
                description: `You have successfully updated your team details`,
              }
            : {
                title: "Team Created",
                description: `You have successfully created a new team with the ID "${values.id}" and name "${values.name}"`,
              }
        );
      })
      .catch(() => {
        onClose();
        setLoading(false);

        triggerFailureToast(toast, {
          title: "Error",
          description: "Oh no! An error occured :(",
        });
      });
  };

  const onClickCancel = () => {
    navigate(edit ? `/teams/${data.team?.id}` : "/teams");
  };

  const onClickCreate = () => {
    const errMessages = {
      id: getError("id", values.id),
      name: getError("name", values.name),
      idea: getError("idea", values.idea),
    };

    if (errMessages.id || errMessages.name || errMessages.idea) {
      setErrors(errMessages);
      return;
    }

    if (team && !edit) {
      onOpen();
    } else {
      onSubmit();
    }
  };

  return (
    <HeadWrapper
      title={edit ? "Edit Team" : "Create Team"}
      subtitle={
        edit
          ? "Make any necessary changes to your team details"
          : "Build your very own team for this hackathon"
      }
    >
      <Box as="form" bg="white" borderRadius="lg" borderWidth="1px" borderColor="gray.200">
        <TeamFormInputs edit={edit} values={values} errors={errors} onChange={onChange} />
        <Divider />
        <TeamFormButtons
          edit={edit}
          loading={!team && loading}
          onClickCancel={onClickCancel}
          onClickCreate={onClickCreate}
        />
      </Box>
      {team && isOpen && (
        <ConfirmationModal
          title="Are you sure you want to continue?"
          body={`WARNING: Creating a new team will remove you from "${team.name}" and delete all your pending join requests`}
          action="Continue"
          onClose={onClose}
          onClick={onSubmit}
        />
      )}
    </HeadWrapper>
  );
};
