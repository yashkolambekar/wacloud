import axios from "axios";
import type { IHeader } from "../../utils/template/headers";

import type { LanguageCode } from "../../utils/template/languages";

const sendTemplate = async (
  ctx: { phoneId: string; token: string; baseRequestUrl: string },
  data: {
    to: string;
    name: string;
    language: LanguageCode;
    header: IHeader;
    parameters: { [key: string]: string }[];
  }
) => {
  // let finalParameteres: { [key: string]: any }[] = [];


  // for (const param of data.parameters) {
  //   finalParameteres.push(param);
  // }

  // console.log("Final Parameters:", finalParameteres);

  const response = await axios.post(
    `${ctx.baseRequestUrl}/${ctx.phoneId}/messages`,
    {
      messaging_product: "whatsapp",
      type: "template",
      to: data.to,
      template: {
        name: data.name,
        language: {
          code: data.language,
        },
        components: [
          {
            type: "header",
            parameters: [data.header]
          },
          {
            type: "body",
            parameters: data.parameters,
          }
        ]
      },
    },
    {
      headers: {
        Authorization: `Bearer ${ctx.token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export default sendTemplate;
