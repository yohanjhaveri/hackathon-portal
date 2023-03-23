import { GithubAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./config";

export const userSignIn = () => {
  const provider = new GithubAuthProvider();

  provider.setCustomParameters({
    allow_signup: "false",
  });

  signInWithRedirect(auth, provider);
};

export const userSignOut = () => {
  signOut(auth);
};
