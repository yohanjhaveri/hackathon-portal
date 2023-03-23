import { Box, Button, Flex, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import { GithubIcon } from "../components/GithubIcon";
import { userSignIn } from "../../../api/auth";
import { unique } from "../../../config";

export const LoginPage = () => {
  const heading = `Welcome to ${unique.eventName}`;

  return (
    <Stack h="100vh" w="100vw" justify="center" align="center" textAlign="center" spacing="12">
      <Box>
        <Heading size="sm" fontWeight="extrabold" letterSpacing="tight" lineHeight="tall">
          <Highlight query="Hackathon" styles={{ color: "brand.500" }}>
            {heading}
          </Highlight>
        </Heading>
        <Text fontSize="lg" color="muted">
          Please login using your github account
        </Text>
      </Box>
      <Box>
        <Button
          mb="10px"
          variant="secondary"
          leftIcon={<GithubIcon boxSize="5" />}
          iconSpacing="2"
          onClick={userSignIn}
        >
          Login with Github
        </Button>
        <Flex gap="4px" justify="center" align="center">
          <Text fontSize="sm" color="muted">
            Having issues?
          </Text>
          <a href={`mailto:${unique.supportEmail}`} target="_blank" rel="noreferrer">
            <Button variant="link" colorScheme="brand" size="sm">
              Contact us
            </Button>
          </a>
        </Flex>
      </Box>
    </Stack>
  );
};
