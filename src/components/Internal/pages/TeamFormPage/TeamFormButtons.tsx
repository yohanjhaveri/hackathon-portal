import { Button, Flex } from "@chakra-ui/react";

export type TeamFormButtonsProps = {
  edit?: boolean;
  loading: boolean;
  onClickCancel: () => void;
  onClickCreate: () => void;
};

export const TeamFormButtons = ({
  edit,
  loading,
  onClickCancel,
  onClickCreate,
}: TeamFormButtonsProps) => (
  <Flex direction="row" justify="flex-end" gap="10px" px="6" py="4">
    <Button variant="ghost" colorScheme="gray" isDisabled={loading} onClick={onClickCancel}>
      Cancel
    </Button>
    <Button variant="primary" isLoading={loading} onClick={onClickCreate}>
      {edit ? "Update" : "Create"}
    </Button>
  </Flex>
);
