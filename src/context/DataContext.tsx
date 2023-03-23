import { createContext, useContext } from "react";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useQueryCollection } from "../hooks/useQueryCollection";
import { Loader } from "../components/Loader";
import type { User } from "firebase/auth";
import type { Participant, Team } from "../types";

export type DataContextValue = {
  user: User;
  participants: Participant[];
  participant: Participant;
  teams: Team[];
  team?: Team;
} | null;

export type DataProviderProps = {
  user: User;
  participant: Participant;
  children: React.ReactNode;
};

const findTeam = (teams: Team[], participant: Participant) => {
  return teams.find((t) => t.members.find((m) => m.id === participant.id));
};

export const DataContext = createContext<DataContextValue>(null);

export const DataProvider = ({ user, participant, children }: DataProviderProps) => {
  const [participants, _pLoading, pError] = useQueryCollection<Participant>("participants");
  const [teams, _tLoading, tError] = useQueryCollection<Team>("teams");

  const error = pError || tError || "";

  if (!participants || !teams) {
    return <Loader />;
  }

  if (error) {
    return (
      <Center h="100vh">
        <VStack justify="center">
          <Heading size="xs">Authorization Error</Heading>
          <Text>There was an error with getting access to the portal</Text>
        </VStack>
      </Center>
    );
  }

  const team = findTeam(teams, participant);

  return (
    <DataContext.Provider value={{ user, participants, participant, teams, team }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
