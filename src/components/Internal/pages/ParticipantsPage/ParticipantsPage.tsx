import { useMemo } from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { filterParticipants } from "../../../../utils/filtering";
import { useData } from "../../../../context/DataContext";
import { useFilters } from "../../../../context/FiltersContext";
import { ParticipantFilters } from "./ParticipantFilters";
import { ParticipantCard } from "./ParticipantCard";

export const ParticipantsPage = () => {
  const data = useData();
  const filters = useFilters();
  const applied = filters?.applied;

  const teams = data?.teams;
  const participants = data?.participants;

  const filteredParticipants = useMemo(() => {
    if (!participants || !teams || !applied) {
      return [];
    }

    return filterParticipants(participants, teams, applied);
  }, [participants, teams, applied]);

  return (
    <Box padding="50px" width="100%">
      <Box mb="30px">
        <Heading size="xs">Participant Directory</Heading>
        <Text color="muted">Search and filter through all participants</Text>
      </Box>
      <Box mb="30px">
        <ParticipantFilters />
      </Box>
      <Grid gap="30px" templateColumns="1fr 1fr 1fr">
        {filteredParticipants.map((participant) => (
          <ParticipantCard key={participant.id} participant={participant} />
        ))}
      </Grid>
    </Box>
  );
};
