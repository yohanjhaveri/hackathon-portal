import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../api/config";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { copy } from "../config";
import { External } from "./External/External";
import { Internal } from "./Internal/Internal";

export const Main = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Error heading={copy.errors.authentication.heading.text} body={copy.errors.authentication.body.text} />
    );
  }

  return user ? <Internal user={user} /> : <External />;
};
