import { useDocumentData } from "react-firebase-hooks/firestore";
import { User } from "firebase/auth";
import { queryParticipant } from "../../api/queries/query-participant";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { copy, emailToId } from "../../config";
import { isTeamRegistrationPhaseActive, isUserRegistrationPhaseActive } from "../../env";
import { Participant } from "../../types";
import { Portal } from "./Portal/Portal";
import { RegistrationClosedPage } from "./RegistrationClosedPage/RegistrationClosedPage";
import { RegistrationDonePage } from "./RegistrationDonePage/RegistrationDonePage";
import { RegistrationFormPage } from "./RegistrationFormPage/RegistrationFormPage";

export type InternalProps = {
  user: User;
};

export const Internal = ({ user }: InternalProps) => {
  const [participant, loading, error] = useDocumentData(queryParticipant(emailToId(user.email || "")));

  if (error) {
    return (
      <Error heading={copy.errors.authorization.heading.text} body={copy.errors.authorization.body.text} />
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (!participant) {
    return isUserRegistrationPhaseActive ? <RegistrationFormPage user={user} /> : <RegistrationClosedPage />;
  }

  return isTeamRegistrationPhaseActive ? (
    <Portal user={user} participant={participant as Participant} />
  ) : (
    <RegistrationDonePage />
  );
};
