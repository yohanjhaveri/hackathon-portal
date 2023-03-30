import { useData } from "../../context";
import { Loader } from "../Loader";
import { NavigationBody } from "./NavigationBody";
import { NavigationContainer } from "./NavigationContainer";
import { NavigationFooter } from "./NavigationFooter";
import { NavigationHeader } from "./NavigationHeader";

export const Navigation = () => {
  const data = useData();

  if (!data) {
    return <Loader />;
  }

  const team = data.team;
  const participant = data.participant;

  return (
    <NavigationContainer>
      <NavigationHeader participantId={participant.id} participantName={participant.name} />
      <NavigationBody participantId={participant.id} teamId={team?.id} />
      <NavigationFooter />
    </NavigationContainer>
  );
};
