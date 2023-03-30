import { Box, HStack } from "@chakra-ui/react";
import { ResponseButtons } from "../../../../../components/ResponseButtons";
import { TeamInfo } from "../../../../../components/TeamInfo";
import { Team } from "../../../../../types";

export type InvitesCardTableProps = {
  teams: Team[];
  onClickAcceptInvite: (team: Team) => void;
  onClickRejectInvite: (team: Team) => void;
};

export const InvitesCardTable = ({
  teams,
  onClickAcceptInvite,
  onClickRejectInvite,
}: InvitesCardTableProps) => (
  <Box>
    {teams.map((team) => (
      <HStack
        key={team.id}
        px="6"
        py="4"
        borderTopWidth="1px"
        borderTopColor="gray.100"
        justify="space-between"
      >
        <TeamInfo team={team} />
        <ResponseButtons
          labelAccept="Accept invite"
          labelReject="Reject invite"
          onClickAccept={() => onClickAcceptInvite(team)}
          onClickReject={() => onClickRejectInvite(team)}
        />
      </HStack>
    ))}
  </Box>
);
