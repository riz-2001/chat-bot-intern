import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import InitialChatMessage from '../components/InitialChatMsg';
import GotIt from '../components/UserReplys/GotIt';
import Slot from '../components/Slots/Slots';
import AgeDropDown from '../components/AgeDropDown';
const botName = 'Bot';

const config = {
  initialMessages: [
    createChatBotMessage(<InitialChatMessage />),
    createCustomMessage('Custom', 'custom'),
  ],
  botName,
  customMessages: {
    custom: (props) => <GotIt {...props} />,
  },
  widgets: [
    {
      widgetName: 'datePicker',
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: 'agePicker',
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
  ],
};

export default config;
