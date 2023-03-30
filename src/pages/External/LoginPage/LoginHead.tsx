import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { copy } from "../../../config";

export const LoginHead = () => (
  <Stack spacing="3">
    <Box>
      <Heading size="xs" fontWeight="bold" letterSpacing="tight">
        {copy.login.title.prefix.text}
      </Heading>
      <Heading size="md" fontWeight="extrabold" color="brand.500">
        {copy.login.title.text}
      </Heading>
    </Box>
    <Text fontSize="lg" color="muted">
      {copy.login.subtitle.text}
    </Text>
  </Stack>
);
