import { Button } from "@chakra-ui/react";
import { userSignIn } from "../../../api/auth";
import { copy } from "../../../config";
import { LoginButtonIcon } from "./LoginButtonIcon";

export const LoginButton = () => (
  <Button variant="secondary" leftIcon={<LoginButtonIcon boxSize="5" />} iconSpacing="2" onClick={userSignIn}>
    {copy.login.button.text}
  </Button>
);
