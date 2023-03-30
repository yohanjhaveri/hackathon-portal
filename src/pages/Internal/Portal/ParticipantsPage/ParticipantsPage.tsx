import { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { GridWrapper } from "../../../../components/wrappers/GridWrapper";
import { HeadWrapper } from "../../../../components/wrappers/HeadWrapper";
import { useData, useFilters } from "../../../../context";
import { filterParticipants } from "../../../../utils";
import { ParticipantCard } from "./ParticipantCard";
import { ParticipantFilters } from "./ParticipantFilters";

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
    <HeadWrapper title="Participant Directory" subtitle="Search and filter through all participants">
      <Box mb="8">
        <ParticipantFilters />
      </Box>
      <GridWrapper>
        {filteredParticipants.map((participant) => (
          <ParticipantCard key={participant.id} participant={participant} />
        ))}
      </GridWrapper>
    </HeadWrapper>
  );
};
