import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { firestore } from "../../api/config";
import { emailToId } from "../../config";
import { isTeamRegistrationPhaseActive, isUserRegistrationPhaseActive } from "../../constants/env";

import { RegistrationDonePage } from "./pages/RegistrationDonePage/RegistrationDonePage";
import { RegistrationFormPage } from "./pages/RegistrationFormPage/RegistrationFormPage";

import { Loader } from "../Loader";
import { Portal } from "./Portal";

import type { User } from "firebase/auth";
import type { Participant } from "../../types";

export type InternalProps = {
  user: User;
};

export const Internal = ({ user }: InternalProps) => {
  const [participant, loading] = useDocumentData(doc(firestore, "participants", emailToId(user.email || "")));

  if (loading) {
    return <Loader />;
  }

  if (!participant) {
    return isUserRegistrationPhaseActive ? (
      <RegistrationFormPage user={user} />
    ) : (
      <div>SORRY, REGISTRATION HAS CLOSED</div>
    );
  }

  return isTeamRegistrationPhaseActive ? (
    <Portal user={user} participant={participant as Participant} />
  ) : (
    <RegistrationDonePage />
  );
};
