import React from 'react';

///
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleInitialResponse = () => {
    const botMessage = this.createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'gotIt',
      }
    );
    this.addMessageToState(botMessage);
  };

  calenderSlots = () => {
    const botMessage = this.createChatBotMessage('Pick a date', {
      widget: 'datePicker',
    });
    this.addMessageToState(botMessage);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
