export type IHeader =
  | { type: "document"; document: { link: string } }
  | { type: "image"; image: { link: string } }
  | { type: "video"; video: { link: string } }
  | { type: "text"; text: string };

class Headers {

  static document = (link: string) : IHeader=> {
    return {
      type: "document",
      document: {
        link: link,
      },
    };
  };

  static image = (link: string) : IHeader => {
    return {
      type: "image",
      image: {
        link: link,
      },
    };
  };

  static video = (link: string) : IHeader => {
    return {
      type: "video",
      video: {
        link: link,
      },
    };
  };

  static text = (textValue: string): IHeader => {
    return {
      type: "text",
      text: textValue,
    };
  };
}

export default Headers;