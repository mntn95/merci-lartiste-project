import { useFela } from "react-fela";

const modalContainer = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  backgroundColor: "black",
  opacity: ".9",
  zIndex: "1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modal = ({ theme }) => ({
  overflow: "scroll",
  marginTop: "4rem",
  backgroundColor: theme.whiteSpaceColor,
  "@media (min-width: 1024px)": {
    width: "70%",
  },
  width: "90%",
  height: "100%",
  opacity: "1",
});

const modalClose = {
  marginLeft: "auto",
  marginRight: "1rem",
  marginTop: "1rem",
  width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
};

const modalHeader = {
  paddingTop: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const modalHeaderTitle = {
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  textTransform: "uppercase",
};

const modalContent = {
  fontSize: "14px",
  display: "flex",
  alignItems: "left",
  justifyContent: "center",
  flexDirection: "column",
  margin: "auto",
  width: "90%",
  paddingBottom: "3rem",
};

const modalContentIntro = {
  paddingTop: "1rem",
};

const modalHeaderSubTitle = {
  paddingTop: "1rem",
  fontSize: "20px",
  textTransform: "uppercase",
};

const Modal = ({ showModal }) => {
  const { css, theme } = useFela();
  return (
    <div className={css(modalContainer)} onClick={() => showModal(false)}>
      <div
        className={css(modal({ theme }))}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={css(modalClose)} onClick={() => showModal(false)}>
          <span>FERMER</span>
        </div>
        <div className={css(modalHeader)}>
          <h2 className={css(modalHeaderTitle)}>
            Conditions générales d'utilisation
          </h2>
          <span>En vigueur au 31/08/2022</span>
        </div>
        <div className={css(modalContent)}>
          <div className={css(modalContentIntro)}>
            <p>
              Les présentes conditions générales d'utilisation (dites « CGU »)
              ont pour objet l'encadrement juridique des modalités de mise à
              disposition du site et des services par _______________ et de
              définir les conditions d’accès et d’utilisation des services par «
              l'Utilisateur ». Les présentes CGU sont accessibles sur le site à
              la rubrique «CGU».
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>
            Article 1 : Les mentions légales
          </h3>
          <div>
            <p>
              L’édition et la direction de la publication du site
              http://www.merci-lartiste.com est assurée par Virgile Palaisy,
              domicilié 12 all&e de la haute salle 95290 l'isle-adam. Numéro de
              téléphone est 0671109009 Adresse e-mail post-odium@live.fr.
            </p>
            <p>
              L'hébergeur du site http://www.merci-lartiste.com est la société
              OVH, dont le siège social est situé au Roubaix, avec le numéro de
              téléphone : _______________.
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>
            Article 2 : Accès au site
          </h3>
          <div>
            Le site http://www.merci-lartiste.com permet à l'Utilisateur un
            accès gratuit aux services suivants : Le site internet propose les
            services suivants : Informations concernant les tarifs, horaires
            d'ouverture, contacts de Merci l'Artiste. Prises de rendez- vous en
            ligne pour des services liés à la coiffure, la coupe ou la
            coloration des cheveux et de la barbe. Le site est accessible
            gratuitement en tout lieu à tout Utilisateur ayant un accès à
            Internet. Tous les frais supportés par l'Utilisateur pour accéder au
            service (matériel informatique, logiciels, connexion Internet, etc.)
            sont à sa charge.
          </div>
          <h3 className={css(modalHeaderSubTitle)}>
            ARTICLE 3 : Collecte des données
          </h3>
          <div>
            <p>
              Le site est exempté de déclaration à la Commission Nationale
              Informatique et Libertés (CNIL) dans la mesure où il ne collecte
              aucune donnée concernant les Utilisateurs.
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>
            ARTICLE 4 : Propriété intellectuelle
          </h3>
          <div>
            <p>
              Les marques, logos, signes ainsi que tous les contenus du site
              (textes, images, son...) font l'objet d'une protection par le Code
              de la propriété intellectuelle et plus particulièrement par le
              droit d'auteur. L'Utilisateur doit solliciter l'autorisation
              préalable du site pour toute reproduction, publication, copie des
              différents contenus. Il s'engage à une utilisation des contenus du
              site dans un cadre strictement privé, toute utilisation à des fins
              commerciales et publicitaires est strictement interdite. Toute
              représentation totale ou partielle de ce site par quelque procédé
              que ce soit, sans l’autorisation expresse de l’exploitant du site
              Internet constituerait une contrefaçon sanctionnée par l’article L
              335-2 et suivants du Code de la propriété intellectuelle. Il est
              rappelé conformément à l’article L122-5 du Code de propriété
              intellectuelle que l’Utilisateur qui reproduit, copie ou publie le
              contenu protégé doit citer l’auteur et sa source.
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>
            ARTICLE 5 : Responsabilité
          </h3>
          <div>
            <p>
              Les sources des informations diffusées sur le site
              http://www.merci-lartiste.com sont réputées fiables mais le site
              ne garantit pas qu’il soit exempt de défauts, d’erreurs ou
              d’omissions. Les informations communiquées sont présentées à titre
              indicatif et général sans valeur contractuelle. Malgré des mises à
              jour régulières, le site http://www.merci-lartiste.com ne peut
              être tenu responsable de la modification des dispositions
              administratives et juridiques survenant après la publication. De
              même, le site ne peut être tenue responsable de l’utilisation et
              de l’interprétation de l’information contenue dans ce site. Le
              site http://www.merci-lartiste.com ne peut être tenu pour
              responsable d’éventuels virus qui pourraient infecter l’ordinateur
              ou tout matériel informatique de l’Internaute, suite à une
              utilisation, à l’accès, ou au téléchargement provenant de ce site.
              La responsabilité du site ne peut être engagée en cas de force
              majeure ou du fait imprévisible et insurmontable d'un tiers.
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>
            ARTICLE 6 : Liens hypertextes
          </h3>
          <div>
            <p>
              Des liens hypertextes peuvent être présents sur le site.
              L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira
              du site http://www.merci-lartiste.com. Ce dernier n’a pas de
              contrôle sur les pages web sur lesquelles aboutissent ces liens et
              ne saurait, en aucun cas, être responsable de leur contenu.
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>ARTICLE 7 : Cookies</h3>
          <div>
            <p>
              L’Utilisateur est informé que lors de ses visites sur le site, un
              cookie peut s’installer automatiquement sur son logiciel de
              navigation. Les cookies sont de petits fichiers stockés
              temporairement sur le disque dur de l’ordinateur de l’Utilisateur
              par votre navigateur et qui sont nécessaires à l’utilisation du
              site http://www.merci- lartiste.com. Les cookies ne contiennent
              pas d’information personnelle et ne peuvent pas être utilisés pour
              identifier quelqu’un. Un cookie contient un identifiant unique,
              généré aléatoirement et donc anonyme. Certains cookies expirent à
              la fin de la visite de l’Utilisateur, d’autres restent.
              L’information contenue dans les cookies est utilisée pour
              améliorer le site http://www.merci- lartiste.com. En naviguant sur
              le site, L’Utilisateur les accepte. L’Utilisateur doit toutefois
              donner son consentement quant à l’utilisation de certains cookies.
              A défaut d’acceptation, l’Utilisateur est informé que certaines
              fonctionnalités ou pages risquent de lui être refusées.
              L’Utilisateur pourra désactiver ces cookies par l’intermédiaire
              des paramètres figurant au sein de son logiciel de navigation.
            </p>
          </div>
          <h3 className={css(modalHeaderSubTitle)}>ARTICLE 7 : Cookies</h3>
          <div>
            <p>
              La législation française s'applique au présent contrat. En cas
              d'absence de résolution amiable d'un litige né entre les parties,
              les tribunaux français seront seuls compétents pour en connaître.
              Pour toute question relative à l’application des présentes CGU,
              vous pouvez joindre l’éditeur aux coordonnées inscrites à
              l’ARTICLE 1.
            </p>
            <p>CGU réalisées sur http://legalplace.fr/</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
