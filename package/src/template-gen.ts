import axios from 'axios';
import fs from 'fs/promises';
import path from "path";


export async function generateTemplates(token: string, wabaId: string, version: string) {

    if (!token || !wabaId) {

      console.log(token);
      console.log(wabaId);

      throw new Error("❌ Missing WABA_TOKEN or WABA_ID in environment variables.");
    }

  const url = `https://graph.facebook.com/${version}/${wabaId}/message_templates`;
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const templates = response.data.data;

  let code = `
interface Button {
  type: string;
  text: string;
  url?: string;
  example?: string[];
  flow_id?: number;
  flow_action?: string;
  navigate_screen? : string;
}

interface HeaderComponent {
  type: "HEADER";
  format: "IMAGE" | "TEXT";
  text?: string;
  example?: {
    header_handle?: string[];
  };
}

interface BodyComponent {
  type: "BODY";
  text: string;
  example?: {
    body_text_named_params?: { param_name: string, example: string }[];
    body_text?: string[][];
  };
  add_security_recommendation?: boolean;
}

interface ButtonsComponent {
  type: "BUTTONS";
  buttons: Button[];
}

interface FooterComponent {
  type: "FOOTER";
  text: string;
  code_expiration_minutes?: number;
}

type Component =
  | HeaderComponent
  | BodyComponent
  | ButtonsComponent
  | FooterComponent;

interface Template {
  name: string;
  parameter_format: "POSITIONAL" | "NAMED";
  components: Component[];
  language: string;
  status: "APPROVED" | "REJECTED" | "PENDING" | string;
  category: "UTILITY" | "MARKETING" | "AUTHENTICATION";
  id: string;
  previous_category?: string;
  correct_category?: string;
  sub_category?: string;
  message_send_ttl_seconds?: number;
}
  

`;


code += `const wacloudTemplates : Template[] = ${JSON.stringify(templates)}\n \n export {wacloudTemplates}`;


  await fs.writeFile(path.resolve("wacloud-files-templates.ts"), code);
}