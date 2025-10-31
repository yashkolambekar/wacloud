
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
  

const wacloudTemplates : Template[] = [{"name":"super_admin_tasks","parameter_format":"POSITIONAL","components":[{"type":"BODY","text":"Hello world!"},{"type":"BUTTONS","buttons":[{"type":"FLOW","text":"View Flow","flow_id":1079254650791678,"flow_action":"NAVIGATE","navigate_screen":"TASK_SELECTION"}]}],"language":"en","status":"APPROVED","category":"MARKETING","sub_category":"FORM","id":"827495902975413"},{"name":"testing_template","parameter_format":"NAMED","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/490584958_1846758919272834_5437008813580447983_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=xBIPvrZJLhIQ7kNvwGfloe5&_nc_oc=AdmmQUhjeFGfwXJHFlkeVvTh1Czy_cS17xTWNA2eN67AUY8m2c86LDlXhSTRgltNKBM&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQH9xZU0BTWyxnfvW_bnERQLR86FTxds-ZK0JnyhqXuuTtL53qOs-f98jCcZcmipHCuTDVIeqviBSg&oh=01_Q5Aa2wEijVNWwM-7kdDWTq6Zy1dBjfeYqMDbqzSBsnYF4rk-OA&oe=692BF416"]}},{"type":"BODY","text":"Hello {{customer_name}},\n\nPlease note that status of your application has been udpated, to view the latest comments by {{officer_name}}, click below.","example":{"body_text_named_params":[{"param_name":"customer_name","example":"Yash"},{"param_name":"officer_name","example":"Agent 12"}]}},{"type":"BUTTONS","buttons":[{"type":"URL","text":"Check Application","url":"https://wassupmama.com/"}]}],"language":"en","status":"APPROVED","category":"UTILITY","id":"1846758915939501"},{"name":"explore_flow_otp","message_send_ttl_seconds":600,"parameter_format":"POSITIONAL","components":[{"type":"BODY","text":"*{{1}}* is your verification code. For your security, do not share this code.","add_security_recommendation":true,"example":{"body_text":[["123456"]]}},{"type":"FOOTER","text":"This code expires in 10 minutes.","code_expiration_minutes":10},{"type":"BUTTONS","buttons":[{"type":"URL","text":"Copy code","url":"https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code_expiration_minutes=10&code=otp{{1}}","example":["https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code_expiration_minutes=10&code=otp123456"]}]}],"language":"en","status":"APPROVED","category":"AUTHENTICATION","id":"1261130995521319"},{"name":"multiple_pooja_reminder_short_english","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/454510306_934930258476128_7154961084783369373_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=GsUeXYa8KMQQ7kNvwEfUzIr&_nc_oc=AdnXmnNnOdfnYLEa_8UvupEio1sgv4nVmEFZrN1m6wmr-a8ln6fhj4d3Str7yX844mQ&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQFB3Rixgf0W_C9tYy0PeI5rbh066NFFmS2qz37W-AsR8bVPED11J0En13Lw1JH5LYkuFxVfHLyA5g&oh=01_Q5Aa2wHiulZt27vp5Ei40F2AgKHwXK5wUJ3bUw52CzT04Ld3uw&oe=692BDAAD"]}},{"type":"BODY","text":"Namaskaram {{1}} 🙏\nYour  *{{2}}* *{{3}}*🪔 at {{4}} will be performed tomorrow.✨\n\nRest assured 🤝, we will notify you once the puja has been performed.\n\nMay divine blessings shine upon you always! 🙏\n\n*BookMyPuja* 🪷","example":{"body_text":[["Nandakishor","Second","Shani pooja ","Vadakkanthara devi temple"]]}}],"language":"en","status":"APPROVED","category":"UTILITY","id":"934930251809462"},{"name":"multiple_puja_reminder_prasadam","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/425466152_830859559225135_5718186044147027114_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=EN_uvtgk5nQQ7kNvwGzPTqU&_nc_oc=AdmF0VN_KZEOXqznJR78igaVsJn--AzuGoMt0WG6R8jK_BUpu4iact9CRqvtNZLLT-A&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQHyl3hZ_iMXKYnbr6ZNaGn709m4vFCEnRRI7ckJAGUnGVgNJ3e3DvchT1KiEsQr-tW_llMZqe3fQg&oh=01_Q5Aa2wE6_vIQl2ki7KTn2f3u9BznZgftGdv9b4al63pOJ9sweg&oe=692BEEA7"]}},{"type":"BODY","text":"Hello *{{1}}* 👋,\n\n🔔This is a gentle reminder for the upcoming *{{2}} {{5}}*🪔 at {{3}} tomorrow. \nJoin us for this sacred event to seek divine blessings and harmony🙏\n\nPlease arrive at {{4}} to participate in the rituals🪔\n\nWe look forward to your presence😊\n\n*BookMyPuja*🪷","example":{"body_text":[["Shibu","4th","Vadakkanthara Temple","9AM","Special Rekthapushpanjali"]]}},{"type":"FOOTER","text":"Reply STOP from unsubscribing to our puja reminders"}],"language":"en","status":"APPROVED","category":"UTILITY","id":"830859555891802"},{"name":"single_puja_reminder_with_prasadam","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/454890529_497908716390114_4753703419349083137_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=Kv_Mb2PNnfkQ7kNvwGv_gav&_nc_oc=AdlZVuXlCCpqlW-D_Pg5uXceHnIBf37Lbfxq3xlnQxCYMkCgKd_rU-CUQN2mF1bVvpc&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQEaVjFJVZs8o5iHcyfOg2qlmdDysdOW6bX7iYCV3d7qnAlPC_rhk2clnLdaVU31HiJD3D0u0enCKA&oh=01_Q5Aa2wEi786Rw7oFpPJMKkMnJLt7kLCVYhOk3zIAgWsQVOv_jg&oe=692BE447"]}},{"type":"BODY","text":"Hello {{1}} 👋,\n\n🔔This is a gentle reminder For the upcoming {{2}}🪔 at {{3}} tomorrow. \nJoin us for this sacred event to seek divine blessings and harmony🙏\n\nPlease arrive at {{4}} to participate in the rituals🪔\n\nWe look forward to your presence😊\nTeam BookMyPuja🪷","example":{"body_text":[["Shibu","Special Rekthapushpanjali","Vadakkanthara Temple","31/09/2024"]]}},{"type":"FOOTER","text":"Reply STOP from unsubscribing to our puja reminders"}],"language":"en","status":"APPROVED","category":"UTILITY","id":"497908709723448"},{"name":"multiple_puja_reminder","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/438452938_533483052704881_8838953686201274812_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=fwlfFiQ3taIQ7kNvwEFE5nr&_nc_oc=AdlPkVUejkU6XlQfLJ0vk8OfQx_YRlnXMrYcIBx_3IJQPoIE7uMETP_rNR3YTBdVFvg&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQFcBDgEfKIE5O3MPoULkmqo1C_S0HcKApk5CxWzobiUiJQMjXRcb2XzBUvRNMKFPgC5eJd7f49NkQ&oh=01_Q5Aa2wGVw4qjY2TR0si67foPpUroMxDRyupiUoHKg-DH9TkokQ&oe=692BF154"]}},{"type":"BODY","text":"Namaste {{1}} 🙏✨,\n\nYour  *{{2}}*  *{{3}}*🪔 at {{4}} will be performed tomorrow.\n\nWe encourage you to focus your prayers 🙌 and sankalpa🌸 during this auspicious time to maximize the blessings.\n\nRest assured, we will notify you once the puja has been performed.\n\nMay divine grace be with you🌟🙏.\n\n*BookMyPuja* 🪷","example":{"body_text":[["Abhijith","fifth","Shani Puja","Vadakkanthara devi temple"]]}}],"language":"en","status":"REJECTED","category":"UTILITY","id":"533483049371548"},{"name":"single_puja_reminder","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/422349787_917646353730640_575136530534269477_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=-1qEmoUjtl4Q7kNvwGpV_2e&_nc_oc=Adk4pPPmlQ1j522jTRqJok0J9tgh1y_A-7OUsMUJby39cShZxTDlyq2GY82yux7ke-0&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQG8uSNSj7TE9iMESfpe3ZFoESG8r8Tb3luCs_fw-tuq2vJxv0NbHfODBQdPNAq-9hFuwlAKbQSUrw&oh=01_Q5Aa2wFRbfWwQ65lTYumjkAXDgHTHGFEyIjeHbtTquBjq1r2vg&oe=692BF34A"]}},{"type":"BODY","text":"Hello {{1}} 👋,\nYour {{2}} {{3}} at {{4}} has been scheduled for tomorrow. Please pray stronger for maximizing the blessings.We will notify once the puja has been performed.","example":{"body_text":[["Shibu","4th","Shani Puja","Vadakkanthara Devi Temple"]]}},{"type":"FOOTER","text":"Reply STOP from unsubscribing to our puja reminders."}],"language":"en","status":"APPROVED","category":"UTILITY","sub_category":"CUSTOM","id":"917646350397307"},{"name":"welcome_message","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"IMAGE","example":{"header_handle":["https://scontent.whatsapp.net/v/t61.29466-34/459174254_1056930099365434_4318853464364038513_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=6byjp6ZGTkgQ7kNvwEE_18q&_nc_oc=AdkNjmTXKOreMvw4E7b39CU9sjjBjAqfBknDko8x3Ij4-AK0Hp4ztvw6p9idefryDH0&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=CPl6PttNWqJkMSHUaiGV4Q&_nc_tpa=Q5bMBQHOQVjuq_mpI2z_P7rpAVO3OllXXVAjNuaaZL74wF4C42AQ93LyQQVq4YHG-Ecm3z--ZUyMem5FxA&oh=01_Q5Aa2wGzFzUSL74C3a9uT_aUINJVEziITQla8DUBQpukQRakuA&oe=692BD310"]}},{"type":"BODY","text":"Hello {{1}} 👋,\nWelcome to *BookMyPuj*a,` {{2}}","example":{"body_text":[["Shibu","KathinaVCedi"]]}}],"language":"en","status":"APPROVED","category":"MARKETING","sub_category":"CUSTOM","id":"1056930096032101"},{"name":"hello_world","parameter_format":"POSITIONAL","components":[{"type":"HEADER","format":"TEXT","text":"Hello World"},{"type":"BODY","text":"Welcome and congratulations!! This message demonstrates your ability to send a WhatsApp message notification from the Cloud API, hosted by Meta. Thank you for taking the time to test with us."},{"type":"FOOTER","text":"WhatsApp Business Platform sample message"}],"language":"en_US","status":"APPROVED","category":"UTILITY","id":"3947580298897652"}]
 
 export {wacloudTemplates}