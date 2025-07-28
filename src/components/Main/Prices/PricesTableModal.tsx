import React from "react";
import { motion } from "framer-motion";
import { ModalContentProps } from "../../../types";
import { pricesLabels } from "./labels";

interface PriceService {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

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
    price: "10€",
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

const PricesTableModal: React.FC<ModalContentProps> = () => (
  <>
    <div className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-6 px-4 md:px-6 lg:px-8 flex-shrink-0"
      >
        <h2 className="font-botanika text-[#755018] text-sm md:text-base lg:text-lg xl:text-xl leading-tight">
          EXCELLENCE ET TRADITION
          <br />
          AU SERVICE DE TON STYLE
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-4">
        {priceServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="bg-white/5 backdrop-blur-sm border-1 border-[#755018] rounded-lg p-4 md:p-5 hover:bg-white/10"
          >
            <div className="flex sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="font-botanika text-[#755018] text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-0 flex-1">
                {service.name}
              </h3>
              <div className="flex flex-col sm:items-end text-right">
                <span className="text-[rgb(117,80,24)] bg-white/30 rounded-full px-3 py-1 font-bold text-lg md:text-xl mb-1">
                  {service.price}
                </span>
                <span className="text-black/80 text-sm md:text-base font-neue-haas">
                  {service.duration}
                </span>
              </div>
            </div>

            <p className="text-black/90 text-xs md:text-sm lg:text-base leading-relaxed font-neue-haas">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center py-6 px-4 md:px-6 lg:px-8 border-t border-white/30 flex-shrink-0"
    >
      <p className="text-white/80 font-botanika text-sm md:text-base">
        {pricesLabels.title}
      </p>
    </motion.div>
  </>
);

export default PricesTableModal;
