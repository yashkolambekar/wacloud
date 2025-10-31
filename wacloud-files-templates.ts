const wacloudTemplates = [
  {
    name: "super_admin_tasks",
    parameter_format: "POSITIONAL",
    components: [
      { type: "BODY", text: "Hello world!" },
      {
        type: "BUTTONS",
        buttons: [
          {
            type: "FLOW",
            text: "View Flow",
            flow_id: 1079254650791678,
            flow_action: "NAVIGATE",
            navigate_screen: "TASK_SELECTION",
          },
        ],
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "MARKETING",
    sub_category: "FORM",
    id: "827495902975413",
  },
  {
    name: "testing_template",
    parameter_format: "NAMED",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/490584958_1846758919272834_5437008813580447983_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=xBIPvrZJLhIQ7kNvwGfloe5&_nc_oc=AdmmQUhjeFGfwXJHFlkeVvTh1Czy_cS17xTWNA2eN67AUY8m2c86LDlXhSTRgltNKBM&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQHOz5thdbp3r08xe7qysVQ_OW6qA16-rCb7Q1GeYJzchUrCRk6ZVeSllXZrUgmdtWqJHBf2xgTENQ&oh=01_Q5Aa2wHqw_TaPwoBB_bQ7RZe6MOnX6aEOmB3mKkq9KxvxRfkFw&oe=692BBBD6",
          ],
        },
      },
      {
        type: "BODY",
        text: "Hello {{customer_name}},\n\nPlease note that status of your application has been udpated, to view the latest comments by {{officer_name}}, click below.",
        example: {
          body_text_named_params: [
            { param_name: "customer_name", example: "Yash" },
            { param_name: "officer_name", example: "Agent 12" },
          ],
        },
      },
      {
        type: "BUTTONS",
        buttons: [
          {
            type: "URL",
            text: "Check Application",
            url: "https://wassupmama.com/",
          },
        ],
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "UTILITY",
    id: "1846758915939501",
  },
  {
    name: "explore_flow_otp",
    message_send_ttl_seconds: 600,
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "BODY",
        text: "*{{1}}* is your verification code. For your security, do not share this code.",
        add_security_recommendation: true,
        example: { body_text: [["123456"]] },
      },
      {
        type: "FOOTER",
        text: "This code expires in 10 minutes.",
        code_expiration_minutes: 10,
      },
      {
        type: "BUTTONS",
        buttons: [
          {
            type: "URL",
            text: "Copy code",
            url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code_expiration_minutes=10&code=otp{{1}}",
            example: [
              "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code_expiration_minutes=10&code=otp123456",
            ],
          },
        ],
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "AUTHENTICATION",
    id: "1261130995521319",
  },
  {
    name: "multiple_pooja_reminder_short_english",
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/454510306_934930258476128_7154961084783369373_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=GsUeXYa8KMQQ7kNvwEfUzIr&_nc_oc=AdnXmnNnOdfnYLEa_8UvupEio1sgv4nVmEFZrN1m6wmr-a8ln6fhj4d3Str7yX844mQ&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQEWylCOM-rzRHwGU56tdpBaB2vDZys8q6n_LnTx9-108R0xlh_LZnvRAKtW4VP4r19wu2VKF6Ma-g&oh=01_Q5Aa2wHwDvILBfE00DGNbFQwR-8qzpFHlSwTY04OdKN9_LCI2Q&oe=692BDAAD",
          ],
        },
      },
      {
        type: "BODY",
        text: "Namaskaram {{1}} 🙏\nYour  *{{2}}* *{{3}}*🪔 at {{4}} will be performed tomorrow.✨\n\nRest assured 🤝, we will notify you once the puja has been performed.\n\nMay divine blessings shine upon you always! 🙏\n\n*BookMyPuja* 🪷",
        example: {
          body_text: [
            [
              "Nandakishor",
              "Second",
              "Shani pooja ",
              "Vadakkanthara devi temple",
            ],
          ],
        },
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "UTILITY",
    id: "934930251809462",
  },
  {
    name: "multiple_puja_reminder_prasadam",
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/425466152_830859559225135_5718186044147027114_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=EN_uvtgk5nQQ7kNvwGzPTqU&_nc_oc=AdmF0VN_KZEOXqznJR78igaVsJn--AzuGoMt0WG6R8jK_BUpu4iact9CRqvtNZLLT-A&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQH_OXyJMF5Jm5_y7wJEj0ziqrYAno8J-w8y-RZ2aClDvRZG5rDhI0EYNsPTVtdo_fWmtQKp-F9w9g&oh=01_Q5Aa2wFBR3Iez0t8DBAk81WUv5ESmjm0WFiNZkRtOGVN1HbBKA&oe=692BB667",
          ],
        },
      },
      {
        type: "BODY",
        text: "Hello *{{1}}* 👋,\n\n🔔This is a gentle reminder for the upcoming *{{2}} {{5}}*🪔 at {{3}} tomorrow. \nJoin us for this sacred event to seek divine blessings and harmony🙏\n\nPlease arrive at {{4}} to participate in the rituals🪔\n\nWe look forward to your presence😊\n\n*BookMyPuja*🪷",
        example: {
          body_text: [
            [
              "Shibu",
              "4th",
              "Vadakkanthara Temple",
              "9AM",
              "Special Rekthapushpanjali",
            ],
          ],
        },
      },
      {
        type: "FOOTER",
        text: "Reply STOP from unsubscribing to our puja reminders",
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "UTILITY",
    id: "830859555891802",
  },
  {
    name: "single_puja_reminder_with_prasadam",
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/454890529_497908716390114_4753703419349083137_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=Kv_Mb2PNnfkQ7kNvwGv_gav&_nc_oc=AdlZVuXlCCpqlW-D_Pg5uXceHnIBf37Lbfxq3xlnQxCYMkCgKd_rU-CUQN2mF1bVvpc&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQEvAOwTv5NiJV3iSB6v1GcxV3I-K2wWBwmK6Ik3kK5hUK1iobN_bv_b5W6f34t5W8iuwj8E6LCunQ&oh=01_Q5Aa2wHvYfCh1AuC-N9lQ67c4RQRSSXDr_lzW33SkXAbuxb6Cg&oe=692BE447",
          ],
        },
      },
      {
        type: "BODY",
        text: "Hello {{1}} 👋,\n\n🔔This is a gentle reminder For the upcoming {{2}}🪔 at {{3}} tomorrow. \nJoin us for this sacred event to seek divine blessings and harmony🙏\n\nPlease arrive at {{4}} to participate in the rituals🪔\n\nWe look forward to your presence😊\nTeam BookMyPuja🪷",
        example: {
          body_text: [
            [
              "Shibu",
              "Special Rekthapushpanjali",
              "Vadakkanthara Temple",
              "31/09/2024",
            ],
          ],
        },
      },
      {
        type: "FOOTER",
        text: "Reply STOP from unsubscribing to our puja reminders",
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "UTILITY",
    id: "497908709723448",
  },
  {
    name: "multiple_puja_reminder",
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/438452938_533483052704881_8838953686201274812_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=fwlfFiQ3taIQ7kNvwEFE5nr&_nc_oc=AdlPkVUejkU6XlQfLJ0vk8OfQx_YRlnXMrYcIBx_3IJQPoIE7uMETP_rNR3YTBdVFvg&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQGrwqkMpiAFD0_ZXkAvIY21wqa4h5xTu35ejm3Uo2AxLmO152LAH6dHw3cn8lBSMVUHXaSS1kpRtQ&oh=01_Q5Aa2wF28IdIZP35URbEn8vJECYkk-jZy73oAKRxBhlY0hBLfg&oe=692BB914",
          ],
        },
      },
      {
        type: "BODY",
        text: "Namaste {{1}} 🙏✨,\n\nYour  *{{2}}*  *{{3}}*🪔 at {{4}} will be performed tomorrow.\n\nWe encourage you to focus your prayers 🙌 and sankalpa🌸 during this auspicious time to maximize the blessings.\n\nRest assured, we will notify you once the puja has been performed.\n\nMay divine grace be with you🌟🙏.\n\n*BookMyPuja* 🪷",
        example: {
          body_text: [
            ["Abhijith", "fifth", "Shani Puja", "Vadakkanthara devi temple"],
          ],
        },
      },
    ],
    language: "en",
    status: "REJECTED",
    category: "UTILITY",
    id: "533483049371548",
  },
  {
    name: "single_puja_reminder",
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/422349787_917646353730640_575136530534269477_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=-1qEmoUjtl4Q7kNvwGpV_2e&_nc_oc=Adk4pPPmlQ1j522jTRqJok0J9tgh1y_A-7OUsMUJby39cShZxTDlyq2GY82yux7ke-0&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQHUBMr0se09C_iOWP0HPi5Qx4-HDM6tvzJnjjDjYaf5b3rU9M8lV97cWeHnfb5tYpZr0tS3MwgwBw&oh=01_Q5Aa2wHldqo2lI-UsHGrNyJAwzbxM0vOGONkY-9QUJHBRESkGw&oe=692BBB0A",
          ],
        },
      },
      {
        type: "BODY",
        text: "Hello {{1}} 👋,\nYour {{2}} {{3}} at {{4}} has been scheduled for tomorrow. Please pray stronger for maximizing the blessings.We will notify once the puja has been performed.",
        example: {
          body_text: [
            ["Shibu", "4th", "Shani Puja", "Vadakkanthara Devi Temple"],
          ],
        },
      },
      {
        type: "FOOTER",
        text: "Reply STOP from unsubscribing to our puja reminders.",
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "UTILITY",
    sub_category: "CUSTOM",
    id: "917646350397307",
  },
  {
    name: "welcome_message",
    parameter_format: "POSITIONAL",
    components: [
      {
        type: "HEADER",
        format: "IMAGE",
        example: {
          header_handle: [
            "https://scontent.whatsapp.net/v/t61.29466-34/459174254_1056930099365434_4318853464364038513_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=6byjp6ZGTkgQ7kNvwEE_18q&_nc_oc=AdkNjmTXKOreMvw4E7b39CU9sjjBjAqfBknDko8x3Ij4-AK0Hp4ztvw6p9idefryDH0&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=opXlYv2EGlOwxGYFtG81iQ&_nc_tpa=Q5bMBQFCGmwvYJIFnh7GdQ0OVwUozIj5krh9fCp09c6sDpubJufGxYovPnet_xWXqEWbH-KcWWCyok02kw&oh=01_Q5Aa2wFPkMH-_OX6A4Zco0-c8MiElZo_6cBVWuLEu2YSbNGjSw&oe=692BD310",
          ],
        },
      },
      {
        type: "BODY",
        text: "Hello {{1}} 👋,\nWelcome to *BookMyPuj*a,` {{2}}",
        example: { body_text: [["Shibu", "KathinaVCedi"]] },
      },
    ],
    language: "en",
    status: "APPROVED",
    category: "MARKETING",
    sub_category: "CUSTOM",
    id: "1056930096032101",
  },
  {
    name: "hello_world",
    parameter_format: "POSITIONAL",
    components: [
      { type: "HEADER", format: "TEXT", text: "Hello World" },
      {
        type: "BODY",
        text: "Welcome and congratulations!! This message demonstrates your ability to send a WhatsApp message notification from the Cloud API, hosted by Meta. Thank you for taking the time to test with us.",
      },
      { type: "FOOTER", text: "WhatsApp Business Platform sample message" },
    ],
    language: "en_US",
    status: "APPROVED",
    category: "UTILITY",
    id: "3947580298897652",
  },
];

export { wacloudTemplates };
