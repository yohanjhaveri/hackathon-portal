import { Container, Stack } from "@chakra-ui/react";
import { copy } from "../../../config";
import { LoginButton } from "./LoginButton";
import { LoginContact } from "./LoginContact";
import { LoginHead } from "./LoginHead";

export const LoginPage = () => (
  <Stack
    minH="100dvh"
    p={{ base: "5", sm: "80px 0 0 0" }}
    backgroundSize="cover"
    backgroundImage={copy.login.background.image.src}
    backgroundPosition="center top"
  >
    <Container maxW="md" p={{ base: "8", sm: "10" }} bg="white" borderRadius="xl">
      <Stack spacing="8" align="flex-start">
        <LoginHead />
        <Stack spacing="2.5">
          <LoginButton />
          <LoginContact />
        </Stack>
      </Stack>
    </Container>
  </Stack>
);
