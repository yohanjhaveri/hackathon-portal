import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./pages/Main";
import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Main />
  </ChakraProvider>
);
