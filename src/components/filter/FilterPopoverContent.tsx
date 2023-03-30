import { ReactNode } from "react";
import { PopoverBody, PopoverContent, PopoverFooter, usePopoverContext } from "@chakra-ui/react";
import { FilterActionButtons, FilterActionButtonsProps } from "./FilterActionButtons";

type FilterPopoverContentProps = FilterActionButtonsProps & {
  children?: ReactNode;
};

export const FilterPopoverContent = ({
  children,
  onClickReset,
  onClickApply,
  isResetDisabled,
}: FilterPopoverContentProps) => {
  const { onClose } = usePopoverContext();

  return (
    <PopoverContent _focus={{ shadow: "none", outline: 0 }} _focusVisible={{ shadow: "outline" }}>
      <PopoverBody padding="6">{children}</PopoverBody>
      <PopoverFooter>
        <FilterActionButtons
          isResetDisabled={isResetDisabled}
          onClickReset={() => {
            onClickReset?.();
            onClose();
          }}
          onClickApply={() => {
            onClickApply?.();
            onClose();
          }}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};
