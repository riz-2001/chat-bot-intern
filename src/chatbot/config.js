import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import Slots from '../components/Slots/Slots';
import InitialChatMessage from '../components/InitialChatMsg';
import GotIt from '../components/UserReplys/GotIt';
import Slot from '../components/Slots/Slots';
import GeneralOptions from '../components/test';
const botName = 'Bot';

const config = {
  initialMessages: [
    createChatBotMessage(<InitialChatMessage />, ),
    createCustomMessage('Custom', 'custom'),
  ],
  botName,
  customMessages: {
    custom: (props) => <GotIt {...props} />,
  },
  widgets: [
    {
      widgetName: 'gotIt',
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: 'dateSlot',
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: 'options',
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
  ],
};

export default config;
