import { Button } from "@chakra-ui/react";
import { FaDoorOpen } from "react-icons/fa";
import { userSignOut } from "../../../../api/auth";

export const NavigationFooter = () => (
  <Button
    display="block"
    h="auto"
    py="4"
    size="sm"
    variant="ghost"
    _hover={{ color: "red.500" }}
    _active={{ color: "red.600" }}
    leftIcon={<FaDoorOpen />}
    onClick={userSignOut}
  >
    Sign out
  </Button>
);
