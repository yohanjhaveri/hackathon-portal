import { Flex, Text } from "@chakra-ui/react";
import { ExternalLink } from "../../../components/ExternalLink";
import { copy } from "../../../config";

export const LoginContact = () => (
  <Flex gap="4px" justify="center" align="center">
    <Text color="muted">{copy.login.contact.prompt.text}</Text>
    <ExternalLink href={copy.login.contact.link.href}>{copy.login.contact.link.text}</ExternalLink>
  </Flex>
);
