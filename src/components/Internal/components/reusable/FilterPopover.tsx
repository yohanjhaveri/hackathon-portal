import {
  HStack,
  Icon,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  usePopoverContext,
} from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FilterActionButtons, FilterActionButtonsProps } from "./FilterActionButtons";

type FilterPopoverButtonProps = {
  label: string;
  icon?: ElementType;
  selected?: boolean;
};

export const FilterPopoverButton = ({ label, icon, selected }: FilterPopoverButtonProps) => (
  <PopoverTrigger>
    <HStack
      justify="space-between"
      position="relative"
      as="button"
      borderWidth="1px"
      borderColor="gray.300"
      zIndex="11"
      rounded="lg"
      paddingStart="3"
      paddingEnd="2"
      paddingY="7px"
      spacing="1"
      data-selected={selected || undefined}
      _expanded={{ bg: "gray.50" }}
      bg="gray.100"
    >
      {icon && <Icon as={icon} boxSize="2" />}
      <Text color="gray.600" fontWeight="medium" pr="6px">
        {label}
      </Text>
      <Icon as={HiChevronDown} fontSize="xl" color="gray.400" />
    </HStack>
  </PopoverTrigger>
);

type FilterPopoverContentProps = FilterActionButtonsProps & {
  header?: string;
  children?: ReactNode;
};

export const FilterPopoverContent = ({
  header,
  children,
  onClickReset,
  onClickApply,
  isResetDisabled,
}: FilterPopoverContentProps) => {
  const { onClose } = usePopoverContext();

  return (
    <PopoverContent _focus={{ shadow: "none", outline: 0 }} _focusVisible={{ shadow: "outline" }}>
      {header && <PopoverHeader srOnly>{header}</PopoverHeader>}
      <PopoverBody padding="6">{children}</PopoverBody>
      <PopoverFooter>
        <FilterActionButtons
          onClickReset={() => {
            onClickReset?.();
            onClose();
          }}
          isResetDisabled={isResetDisabled}
          onClickApply={() => {
            onClickApply?.();
            onClose();
          }}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};
