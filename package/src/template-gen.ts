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

  await fs.writeFile(path.resolve("wacloud-files-templates.ts"), `const wacloudTemplates = ${JSON.stringify(templates)}\n \n export {wacloudTemplates}`);
}