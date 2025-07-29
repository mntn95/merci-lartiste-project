import { PricesLabels, PriceService } from "../../../types";

const pricesLabels: PricesLabels = {
  title: "Espèces uniquement",
  headerTitle: "EXCELLENCE ET TRADITION\nAU SERVICE DE TON STYLE",
  topFirstItem: "Coupe + Barbe",
  topFirstPrice: "40€",
  topSecondItem: "Décoloration + coupe",
  topSecondPrice: "90€",
  bottomFirstItem: "Coupe",
  bottomFirstPrice: "25€",
  bottomSecondItem: "Barbe",
  bottomSecondPrice: "25€",
  viewAllPricesButton: "Voir tous les tarifs",
  fullPriceTableTitle: "Grille des prix",
};

const priceServices: PriceService[] = [
  {
    id: "coupe",
    name: "COUPE",
    price: "25€",
    duration: "30 minutes",
    description:
      "Tu cherches une coupe affutée ? Par ici la petite sucrerie ! Cinq tondeuses et deux ciseaux sculperont vos cheveux, je ferais honneur à ton scalp.",
  },
  {
    id: "coupe-barbe",
    name: "COUPE & TAILLE DE BARBE",
    price: "40€",
    duration: "1 heure",
    description:
      "Toi, on voit tout de suite que tu sais ce qui est bon pour toi...on va faire cette petite mise à jour ensemble au poil près, à l'aide d'un véritable coupe-chou à l'ancienne.",
  },
  {
    id: "taille-barbe",
    name: "TAILLE DE BARBE",
    price: "25€",
    duration: "30 minutes",
    description:
      "Un taillage au poil. J'affile déjà mon coupe-chou sur mon cuir et je t'attends. D'ailleurs, t'ai-je déjà dit qu'il venait de la dernière forge de France, fondée en 1884 ?",
  },
  {
    id: "barbe-peaux-sensibles",
    name: "TAILLE DE BARBE POUR PEAUX SENSIBLES",
    price: "15€",
    duration: "15 minutes",
    description:
      "Oui je comprends, tu n'es pas venu là pour souffrir. Ici, point de lame, l'éléctrique n'écorchera pas ton cuir.",
  },
  {
    id: "rasage-traditionnel",
    name: "RASAGE TRADITIONNEL",
    price: "40€",
    duration: "1 heure",
    description:
      "Là, ça rigole plus. On sort le blaireau en poil de haute montagne et on fait monter la grosse mousse à la main. Ça remonte au temps où les barbiers étaient aussi des arracheurs de dents, un savoir ancestral.",
  },
  {
    id: "coupe-rasage",
    name: "COUPE & RASAGE TRADITIONNEL",
    price: "60€",
    duration: "1h30",
    description:
      "Ok, j'ai compris le projet : tu souhaites renaître ! D'ailleurs, la marque de blaireau que j'ai choisie pour toi était utilisée par M.Napoléon en personne, créée en 1808, oui monsieur.",
  },
  {
    id: "la-z",
    name: "LA Z",
    price: "15€",
    duration: "10 minutes",
    description:
      "Tu veux le crâne lisse comme une boule de billard ? Avoir la tête comme un coin de beurre, plus un poil sur le caillou et faire le déséspoir des poux ? Par ici, l'ami !",
  },
  {
    id: "coupe-decoloration",
    name: "COUPE & DÉCOLORATION",
    price: "110€",
    duration: "4 heures",
    description:
      "Même ta maman ne te reconnaîtra pas ! Cela nécessire un petit entretien avant de valider ton projet, on en discute ? (Validation par téléphone ou au salon)",
  },
  {
    id: "coupe-enfant",
    name: "COUPE ENFANT",
    price: "20€",
    duration: "30 minutes",
    description: "Il sera assurément le plus beau de la récré !",
  },
];

export { pricesLabels, priceServices };
