import { Box, Stack, Text } from "@chakra-ui/react";
import { CardWrapper } from "../../../../../components/wrappers/CardWrapper";
import { Participant } from "../../../../../types";
import { InvitesCardEmpty } from "./InvitesCardEmpty";
import { InvitesCardTable } from "./InvitesCardTable";

export type InvitesCardProps = {
  invites: Participant[];
};

export const InvitesCard = ({ invites }: InvitesCardProps) => (
  <CardWrapper flex="1">
    <Stack spacing="3">
      <Box p="5" pb="0">
        <Text fontSize="lg" fontWeight="bold">
          Invites
        </Text>
      </Box>
      {invites.length !== 0 ? <InvitesCardTable invites={invites} /> : <InvitesCardEmpty />}
    </Stack>
  </CardWrapper>
);
