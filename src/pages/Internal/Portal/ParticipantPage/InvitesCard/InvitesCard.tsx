import { Box, Stack, Text } from "@chakra-ui/react";
import { CardWrapper } from "../../../../../components/wrappers/CardWrapper";
import { Team } from "../../../../../types";
import { InvitesCardEmpty } from "./InvitesCardEmpty";
import { InvitesCardTable } from "./InvitesCardTable";

export type InvitesCardProps = {
  teams: Team[];
  onClickAcceptInvite: (team: Team) => void;
  onClickRejectInvite: (team: Team) => void;
};

export const InvitesCard = ({ teams, onClickAcceptInvite, onClickRejectInvite }: InvitesCardProps) => (
  <CardWrapper>
    <Stack spacing="3">
      <Box p="5" pb="0">
        <Text fontSize="lg" fontWeight="bold">
          Invites
        </Text>
      </Box>
      {teams.length !== 0 ? (
        <InvitesCardTable
          teams={teams}
          onClickAcceptInvite={onClickAcceptInvite}
          onClickRejectInvite={onClickRejectInvite}
        />
      ) : (
        <InvitesCardEmpty />
      )}
    </Stack>
  </CardWrapper>
);
