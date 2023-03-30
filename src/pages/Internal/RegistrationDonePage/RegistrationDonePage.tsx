import { Message } from "../../../components/Message";
import { FlowWrapper } from "../../../components/wrappers/FlowWrapper";
import { copy } from "../../../config";

export const RegistrationDonePage = () => (
  <FlowWrapper>
    <Message heading={copy.userRegistrationDone.heading.text} body={copy.userRegistrationDone.body.text} />
  </FlowWrapper>
);
