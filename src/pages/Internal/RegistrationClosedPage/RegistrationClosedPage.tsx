import { Message } from "../../../components/Message";
import { FlowWrapper } from "../../../components/wrappers/FlowWrapper";
import { copy } from "../../../config";

export const RegistrationClosedPage = () => (
  <FlowWrapper>
    <Message
      heading={copy.userRegistrationClosed.heading.text}
      body={copy.userRegistrationClosed.body.text}
    />
  </FlowWrapper>
);
