import sendMessage from "./resources/message/sendMessage";

interface IClient {
  BASE_URL: string;
  API_VERSION: string;
  baseRequestUrl: string;
  phoneId: string;
  token: string;
  businessAccountId: string;
}

class Client implements IClient {
  BASE_URL: string = "https://graph.facebook.com";
  API_VERSION: string = "v17.0";
  baseRequestUrl: string = this.BASE_URL + "/" + this.API_VERSION;
  phoneId: string;
  token: string;
  businessAccountId: string;

  constructor(phoneId: string, token: string, businessAccountId: string) {
    if (!phoneId || !token || !businessAccountId) {
      throw new Error(
        "phoneId, token, and businessAccountId are required parameters."
      );
    }

    this.phoneId = phoneId;
    this.token = token;
    this.businessAccountId = businessAccountId;
  }

  sendMessage = async ({ to, message }: { to: string; message: string }) => {
    return sendMessage(
      {
        phoneId: this.phoneId,
        token: this.token,
        baseRequestUrl: this.baseRequestUrl,
      },
      {
        to,
        message
      }
    );
  };

}


export default Client;