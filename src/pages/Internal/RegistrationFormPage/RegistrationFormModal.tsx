import { ConfirmationModal } from "../../../components/modals/ConfirmationModal";
import { copy } from "../../../config";

export type RegistrationFormModalProps = {
  onClose: () => void;
  onSubmit: () => void;
};

export const RegistrationFormModal = ({ onClose, onSubmit }: RegistrationFormModalProps) => (
  <ConfirmationModal
    title={copy.userRegistrationForm.confirmationModal.title.text}
    body={copy.userRegistrationForm.confirmationModal.body.text}
    action={copy.userRegistrationForm.confirmationModal.confirmButton.text}
    onClose={onClose}
    onClick={onSubmit}
  />
);
