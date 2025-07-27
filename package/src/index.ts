import sendMessage from "./resources/message/sendMessage";
import sendImage from "./resources/message/sendImage";
import sendCTA from "./resources/message/sendCTA";

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

  sendMessage = async ({
    to,
    message,
    enableLinkPreview,
  }: {
    to: string;
    message: string;
    enableLinkPreview?: boolean;
  }) => {
    return sendMessage(
      {
        phoneId: this.phoneId,
        token: this.token,
        baseRequestUrl: this.baseRequestUrl,
      },
      {
        to,
        message,
        enableLinkPreview,
      }
    );
  };

  sendImage = async ({
    to,
    imageLink,
    caption,
  }: {
    to: string;
    imageLink: string;
    caption?: string;
  }) => {
    return sendImage(
      {
        phoneId: this.phoneId,
        token: this.token,
        baseRequestUrl: this.baseRequestUrl,
      },
      {
        to,
        imageLink,
        caption,
      }
    );
  };

  sendCTA = async ({
    to,
    ctaUrl,
    ctaText,
    message,
  }: {
    to: string;
    ctaUrl: string;
    ctaText: string;
    message: string;
  }) => {
    return sendCTA(
      {
        phoneId: this.phoneId,
        token: this.token,
        baseRequestUrl: this.baseRequestUrl,
      },
      {
        to,
        ctaUrl,
        ctaText,
        message,
      }
    );
  };
}

export default Client;
