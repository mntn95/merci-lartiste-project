export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "coupe-cheveux",
    title: "Coupe de cheveux",
    description:
      "Coupe personnalisée selon votre style et morphologie, avec conseils d'entretien inclus",
    price: 35,
    duration: "45 min",
  },
  {
    id: "coupe-cheveux-barbe",
    title: "Coupe de cheveux et taille de barbe",
    description:
      "Service complet alliant coupe moderne et taille de barbe soignée pour un look harmonieux",
    price: 50,
    duration: "1h15",
  },
  {
    id: "taille-barbe",
    title: "Taille de barbe",
    description:
      "Taille et mise en forme de votre barbe avec finitions précises et produits de qualité",
    price: 25,
    duration: "30 min",
  },
  {
    id: "rasage-traditionnel",
    title: "Rasage traditionnel",
    description:
      "Expérience authentique du rasage à l'ancienne avec serviettes chaudes et soins apaisants",
    price: 40,
    duration: "45 min",
  },
  {
    id: "taille-barbe-peaux-sensibles",
    title: "Taille de barbe peaux sensibles",
    description:
      "Soin spécialisé pour peaux sensibles avec produits hypoallergéniques et techniques douces",
    price: 30,
    duration: "35 min",
  },
];
