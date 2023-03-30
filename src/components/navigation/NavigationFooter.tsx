import { FaDoorOpen } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { userSignOut } from "../../api/auth";

export const NavigationFooter = () => (
  <Button
    mt="auto !important"
    mb="2 !important"
    size="sm"
    variant="ghost"
    _hover={{ color: "red.500" }}
    _active={{ color: "red.600" }}
    leftIcon={<FaDoorOpen />}
    onClick={userSignOut}
    display="flex"
    alignItems="center"
  >
    Sign out
  </Button>
);
