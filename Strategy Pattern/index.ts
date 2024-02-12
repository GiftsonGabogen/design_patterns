type IMessageType = () => void;

//algorithms
const sendEmail: IMessageType = () => {
  console.log("send email");
};

//algorithms
const sendSMS: IMessageType = () => {
  console.log("send SMS");
};

//algorithms
const sendFBMessage: IMessageType = () => {
  console.log("send FB Message");
};

//algorithms
const sendFBAndEmailMessage: IMessageType = () => {
  sendFBMessage();
  sendEmail();
};

//processor
const messageProcessor = (messageType: IMessageType) => {
  messageType();
};

messageProcessor(sendFBAndEmailMessage);
