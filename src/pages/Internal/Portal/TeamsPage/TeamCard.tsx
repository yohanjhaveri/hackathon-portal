import { Link } from "react-router-dom";
import { Button, HStack, Text, Tooltip, useToast, VStack } from "@chakra-ui/react";
import { sendRequest } from "../../../../api";
import { Loader } from "../../../../components/Loader";
import { MemberCount } from "../../../../components/MemberCount";
import { useData } from "../../../../context";
import { Team } from "../../../../types";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils";

type TeamCardProps = {
  team: Team;
};

export const TeamCard = ({ team }: TeamCardProps) => {
  const data = useData();
  const toast = useToast();

  if (!data) {
    return <Loader />;
  }

  const participant = data.participant;
  const isMyTeam = data.team?.id === team.id;
  const hasUserRequested = Boolean(team.requests.find((r) => r.id === participant?.id));

  const onClickSendRequest = () => {
    participant &&
      sendRequest(team, participant.id)
        .then(() =>
          triggerSuccessToast(toast, {
            title: "Request Sent",
            description: `You have successfully sent a join request to ${team.name}`,
          })
        )
        .catch(() =>
          triggerFailureToast(toast, {
            title: "Error",
            description: "Oh no! An error occured :(",
          })
        );
  };

  const getLabel = () => {
    if (isMyTeam) {
      return "You cannot join the team you are already in";
    }

    if (!team.open) {
      return "The team is closed from new members";
    }

    if (hasUserRequested) {
      return "You have already sent a request to this team";
    }

    return "";
  };

  return (
    <VStack minH="165px" rounded="lg" px="4" py="8" bg="white" borderWidth="1px" borderColor="gray.200">
      <VStack spacing="1" flex="1">
        <Text fontWeight="bold">{team.name}</Text>
        <MemberCount count={team.members.length} />
      </VStack>
      <HStack spacing="2" mt="5">
        <Link to={`/teams/${team.id}`}>
          <Button variant="outline" size="sm">
            View Team
          </Button>
        </Link>
        <Tooltip label={getLabel()}>
          <Button
            size="sm"
            isDisabled={isMyTeam || !team.open || hasUserRequested}
            colorScheme="brand"
            onClick={onClickSendRequest}
          >
            Request to Join
          </Button>
        </Tooltip>
      </HStack>
    </VStack>
  );
};
