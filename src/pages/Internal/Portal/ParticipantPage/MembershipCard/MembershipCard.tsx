import { FaPaperPlane } from "react-icons/fa";
import { Button, Grid, HStack, Text, Tooltip } from "@chakra-ui/react";
import { TeamInfo } from "../../../../../components/TeamInfo";
import { Team } from "../../../../../types";

export type MembershipCardProps = {
  team?: Team;
  inviteAvailabilityMessage: string;
  onClickSendInvite: () => void;
};

export const MembershipCard = ({
  team,
  inviteAvailabilityMessage,
  onClickSendInvite,
}: MembershipCardProps) => (
  <HStack bg="white" rounded="lg" shadow="base" p="6" justify="space-between">
    <Grid>
      {team ? (
        <TeamInfo team={team} />
      ) : (
        <>
          <Text fontWeight="bold">No Team</Text>
          <HStack spacing="1" fontSize="sm" color="gray.600">
            <Text>Currently not a member of any team</Text>
          </HStack>
        </>
      )}
    </Grid>

    <Tooltip label={inviteAvailabilityMessage}>
      <Button
        colorScheme="brand"
        leftIcon={<FaPaperPlane />}
        isDisabled={Boolean(inviteAvailabilityMessage)}
        onClick={onClickSendInvite}
      >
        Invite to team
      </Button>
    </Tooltip>
  </HStack>
);
