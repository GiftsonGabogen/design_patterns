type IMessageType = (message: string) => void;

//algorithms
const createEmail = (username: string) => {
  return (message: string) => {
    console.log(`my name is ${username}, ${message} from Email`);
  };
};

//algorithms
const createFBMessage = (username: string) => {
  return (message: string) => {
    console.log(`my name is ${username}, ${message} from FB Message`);
  };
};

//algorithms
const createSMS = (username: string) => {
  return (message: string) => {
    console.log(`my name is ${username}, ${message} from SMS`);
  };
};

const createSMSAndEmail = (username: string) => {
  return (message: string) => {
    const sendSMS = createSMS(username);
    const sendEmail = createEmail(username);
    sendSMS(message);
    sendEmail(message);
  };
};

//processor
const messageProcessor = (message: string, messageStrategy: IMessageType) => {
  messageStrategy(message);
};

const sendEmail = createEmail("ako");
const sendEmailAndSMS = createSMSAndEmail("ako");

messageProcessor("wassup", sendEmail);
messageProcessor("wassup", sendEmailAndSMS);
