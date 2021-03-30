class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.tolowerCase();

      if(lowercase.includes("hello")) {
        this.actionProvider.greet();
      }
    }
  }
  
  export default MessageParser;