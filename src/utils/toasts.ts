import { ToastId, UseToastOptions } from "@chakra-ui/react";

type Toast = (options?: UseToastOptions | undefined) => ToastId;

export const triggerSuccessToast = (toast: Toast, options: UseToastOptions) => {
  toast({
    status: "success",
    position: "top",
    duration: 5000,
    ...options,
  });
};

export const triggerFailureToast = (toast: Toast, options: UseToastOptions) => {
  toast({
    status: "error",
    position: "top",
    duration: 5000,
    ...options,
  });
};
