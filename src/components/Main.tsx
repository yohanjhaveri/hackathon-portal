import { useAuthState } from "react-firebase-hooks/auth";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";

import { External } from "./External/External";
import { Internal } from "./Internal/Internal";
import { Loader } from "./Loader";

import { auth } from "../api/config";

export const Main = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Center h="100vh">
        <VStack justify="center">
          <Heading size="xs">Authentication Error</Heading>
          <Text>There was an error with logging in to your account</Text>
        </VStack>
      </Center>
    );
  }

  return user ? <Internal user={user} /> : <External />;
};
