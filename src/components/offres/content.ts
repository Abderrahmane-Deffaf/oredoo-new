import facebook from "@/assets/icons/facebook.svg";
import youtube from "@/assets/icons/youtube.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import instagram from "@/assets/icons/instagram.svg";
export const offers = [
  {
    internet: {
      name: "Internet",
      values: [
        {
          offre: 40,
          prix: 1300,
        },
        {
          offre: 30,
          prix: 1000,
        },
        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 20,
          prix: 900,
        },
        {
          offre: 10,
          prix: 300,
        },
      ],
    },
    appelOredoo: {
      name: "Appels vers Ooredoo",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    appelAutres: {
      name: "Appels vers les autres réseaux",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    sms: {
      name: "SMS",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
  },
  {
    internet: {
      name: "Internet",
      values: [
        {
          offre: 50,
          prix: 1800,
        },
        {
          offre: 40,
          prix: 1500,
        },
        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 30,
          prix: 1200,
        },
        {
          offre: 20,
          prix: 1000,
        },
      ],
    },
    appelOredoo: {
      name: "Appels vers Ooredoo",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    appelAutres: {
      name: "Appels vers les autres réseaux",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    sms: {
      name: "SMS",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
  },
  {
    internet: {
      name: "Internet",
      values: [
        {
          offre: 50,
          prix: 1800,
        },
        {
          offre: 40,
          prix: 1500,
        },
        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 30,
          prix: 1200,
        },
        {
          offre: 20,
          prix: 1000,
        },
      ],
    },
    appelOredoo: {
      name: "Appels vers Ooredoo",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    appelAutres: {
      name: "Appels vers les autres réseaux",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
    sms: {
      name: "SMS",
      values: [
        {
          offre: 100,
          prix: 200,
        },

        {
          offre: 400,
          prix: 400,
        },

        {
          offre: 0,
          prix: 0,
        },
        {
          offre: 1000,
          prix: 600,
        },
        {
          offre: 10,
          prix: 50,
        },
      ],
    },
  },
];

export const defaultOffre = {
  internet: {
    offre: 0,
    prix: 0,
  },
  appelOredoo: {
    offre: 0,
    prix: 0,
  },
  appelAutres: {
    offre: 0,
    prix: 0,
  },
  sms: {
    offre: 0,
    prix: 0,
  },
  extra: [
    {
      offre: -1,
      prix: 0,
    },
    {
      offre: -1,
      prix: 0,
    },
    {
      offre: -1,
      prix: 0,
    },
    {
      offre: -1,
      prix: 0,
    },
  ],
};

export const extra = [
  {
    name: "FB & Messenger",
    icon: facebook,
    offre: 0,
    prix: 200,
  },
  {
    name: "Youtube",
    icon: youtube,
    offre: 1,
    prix: 200,
  },
  {
    name: "TikTok",
    icon: tiktok,
    offre: 2,
    prix: 200,
  },
  {
    name: "Instagram",
    icon: instagram,
    offre: 3,
    prix: 200,
  },
];
