import { ServicesLabels } from "../../../types";

export const servicesLabels: ServicesLabels = {
  // Messages d'état
  loading: "Chargement des prestations...",
  errorLoading: "Impossible de charger les prestations. ",
  noResults: {
    title: "Aucune prestation disponible",
    description:
      "Aucun type de rendez-vous n'est configuré pour le moment. Veuillez réessayer plus tard.",
  },
  clickInstruction:
    "Cliquez sur une prestation pour voir les créneaux disponibles",

  // Calendar
  calendar: {
    backButton: "Retour aux prestations",
    backButtonArrow: "← Retour aux prestations",
    duration: "Durée :",
    loadingSlots: "Chargement des créneaux...",
    errorSlots: "Impossible de charger les créneaux disponibles.",
    noSlots: "Aucun créneau disponible pour cette prestation.",
  },

  // Modal
  modal: {
    title: "Finaliser la réservation",
    iframeTitle: "Widget de réservation Calendly",
  },

  // Service items
  service: {
    viewSlots: "Voir créneaux →",
    defaultDescription: "Cliquez pour voir les créneaux disponibles",
  },
};
