import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

export type GridWrapperProps = SimpleGridProps;

export const GridWrapper = ({ ...rest }: GridWrapperProps) => (
  <SimpleGrid columns={3} spacing="8" {...rest} />
);
