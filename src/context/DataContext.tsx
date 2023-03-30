import { createContext, useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { User } from "firebase/auth";
import { queryParticipants } from "../api/queries/query-participants";
import { queryTeams } from "../api/queries/query-teams";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { copy } from "../config";
import { Participant, Team } from "../types";

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
  const [participants, , pError] = useCollectionData(queryParticipants());
  const [teams, , tError] = useCollectionData<Team>(queryTeams());

  const error = pError || tError || "";

  if (!participants || !teams) {
    return <Loader />;
  }

  if (error) {
    return (
      <Error heading={copy.errors.authorization.heading.text} body={copy.errors.authorization.body.text} />
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
