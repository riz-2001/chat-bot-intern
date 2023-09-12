// in MessageParser.jsx

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    message = message.toLowerCase();
    console.log(message);
    const userMsg =
      this.state.messages[this.state.messages.length - 1]?.message;

    if (userMsg === 'Got it!' && message == 'got it') {
      return this.actionProvider.calenderSlots();
    }
    if (userMsg === 'Enter your name') {
      return this.actionProvider.askUserAge();
    }

    // return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
