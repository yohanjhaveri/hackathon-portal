import { Center, FlexProps } from "@chakra-ui/react";

export const NewWrapper = ({ ...rest }: FlexProps) => (
  <Center
    rounded="lg"
    paddingX="4"
    paddingY="8"
    bg="gray.200"
    borderWidth="1px"
    borderColor="gray.300"
    borderStyle="dashed"
    cursor="pointer"
    {...rest}
  />
);
