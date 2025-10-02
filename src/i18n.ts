import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      loading: "Loading...",
      title: "Leagues list",
      select_sport: "Select sport",
      search_league: "Search league",
      league_name: "League name",
      sport_name: "Sport",
      league_alternate: "Alternate league",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
