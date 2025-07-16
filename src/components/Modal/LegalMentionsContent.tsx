import React from "react";
import { Modal } from "react-bootstrap";
import mainBackground from "../../assets/img/mla_background_accueil_1920x1080.png";

const LegalMentionsContent: React.FC = () => {
  return (
    <>
      <Modal.Header
        style={{
          backgroundImage: `url(${mainBackground})`,
          borderColor: "rgb(117, 80, 24)",
        }}
        closeButton
      >
        Mentions légales
      </Modal.Header>
      <Modal.Body style={{ backgroundImage: `url(${mainBackground})` }}>
        <div className="p-8 text-sm leading-relaxed [&_h2]:text-lg [&_h2]:mb-4 [&_h2]:font-bold [&_h3]:text-base [&_h3]:mb-2 [&_h3]:font-bold [&_p]:mb-4">
          <h2>Mentions légales</h2>

          <h3>Identité</h3>
          <p>
            Dénomination : Merci l'Artiste
            <br />
            Adresse : 93 rue des Martyrs, 95660 Champagne-sur-Oise
            <br />
            Téléphone : 09 56 22 03 71
            <br />
            Email : merci.lartist@gmail.com
          </p>

          <h3>Hébergement</h3>
          <p>Ce site est hébergé par un prestataire d'hébergement web.</p>

          <h3>Propriété intellectuelle</h3>
          <p>
            L'ensemble de ce site relève de la législation française et
            internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés.
          </p>

          <h3>Protection des données personnelles</h3>
          <p>
            Conformément à la loi « informatique et libertés » du 6 janvier 1978
            modifiée et au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d'un droit d'accès, de rectification et de
            suppression des données vous concernant.
          </p>
        </div>
      </Modal.Body>
    </>
  );
};

export default LegalMentionsContent;
