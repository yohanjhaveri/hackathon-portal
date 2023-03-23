import { Button, Flex, HStack, Icon, Text, Tooltip, useToast, VStack } from "@chakra-ui/react";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useData } from "../../../../context/DataContext";
import { Team } from "../../../../types";
import { sendRequest } from "../../../../api/actions";
import { triggerFailureToast, triggerSuccessToast } from "../../../../utils/toasts";
import { Loader } from "../../../Loader";

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

  return (
    <Flex
      direction="column"
      align="center"
      rounded="lg"
      paddingX="4"
      paddingY="8"
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <VStack spacing="1" flex="1">
        <Text fontWeight="bold">{team.name}</Text>
        <HStack spacing="1" fontSize="sm" color="gray.600">
          <Icon as={HiUsers} />
          <Text>
            {team.members.length} member{team.members.length !== 1 && "s"}
          </Text>
        </HStack>
      </VStack>
      <Flex gap="6px" mt="20px">
        <Link to={`/teams/${team.id}`}>
          <Button variant="outline" size="sm">
            View Team
          </Button>
        </Link>
        <Tooltip
          label={
            isMyTeam
              ? "You cannot join the team you are already in"
              : team.open
              ? hasUserRequested
                ? "You have already sent a request to this team"
                : ""
              : "The team is closed from new members"
          }
        >
          <Button
            size="sm"
            isDisabled={isMyTeam || !team.open || hasUserRequested}
            colorScheme="brand"
            onClick={onClickSendRequest}
          >
            Request to Join
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
