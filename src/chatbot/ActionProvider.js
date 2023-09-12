import React from 'react';
import ExitComponent from '../components/ExitComponent';

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
    const botMessage = this.createChatBotMessage('Pick a slot', {
      widget: 'datePicker',
    });
    this.addMessageToState(botMessage);
  };

  askUserName = () => {
    const botMessage = this.createChatBotMessage('Enter your name');
    this.addMessageToState(botMessage);
  };

  askUserAge = () => {
    const botMessage = this.createChatBotMessage('Enter your age', {
      widget: 'agePicker',
    });
    this.addMessageToState(botMessage);
  };

  handleUserAge = () => {
    const botMessage = this.createChatBotMessage(<ExitComponent />);
    this.addMessageToState(botMessage);
  };

  handleUserPickedSlot = (dateTime) => {
    const clientMsg = this.createClientMessage(dateTime);
    this.addMessageToState(clientMsg);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
