import * as Flex from "@twilio/flex-ui";

export default (flex: typeof Flex, manager: Flex.Manager) => {
  manager.conversationsClient.on(
    "conversationJoined",
    (conversation) => {
    }
  );
};
