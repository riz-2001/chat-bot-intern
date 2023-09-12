// in MessageParser.jsx

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    message = message.toLowerCase();
    console.log(message);
    if (message == 'Got it') {
      return this.actionProvider.handleInitialResponse();
    }
    if (
      this.state.messages[this.state.messages.length - 1].message ===
      'Enter your name'
    ) {
      return this.actionProvider.askUserAge();
    }
    if (
      this.state.messages[this.state.messages.length - 1].message ===
      'Enter your age'
    ) {
    }

    // return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
