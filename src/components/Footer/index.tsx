import React, { useRef, useEffect } from "react";
import { FooterProps } from "../../types";
import { footerTranslation } from "./intl";
import FooterEllipsis from "../../assets/img/mla_ellipse_contact_593x593.png";
import FooterInstaLogo from "../../assets/img/mla_picto_instagram_238x238.png";

const Footer: React.FC<FooterProps> = ({ setContactRef, showModal }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setContactRef(ref);
  }, [setContactRef]);

  const handleShowLegalMentions = (): void => {
    showModal("legalMentions");
  };

  return (
    <footer id="contact" ref={ref}>
      <div className="w-full px-3 mb-4 mt-8 text-sm md:text-lg">
        {/* First Row */}
        <div className="flex flex-wrap ml-[3px] mb-4 md:mb-8">
          <div className="w-10/12 flex flex-col md:flex-row mt-40 md:mt-0">
            {/* First sub-column */}
            <div className="mb-8 md:mb-0 md:w-1/2">
              <div className="lg:w-1/2">{footerTranslation.street}</div>
              <div className="lg:w-1/2">{footerTranslation.postalCode}</div>
            </div>
            {/* Second sub-column */}
            <div className="md:w-1/2">
              <div className="lg:w-1/2">{footerTranslation.weekDays}</div>
              <div className="lg:w-1/2">{footerTranslation.workHours}</div>
            </div>
          </div>
          <div className="w-2/12">
            <div className="relative">
              <div
                className="absolute -right-24 -top-10 w-[250px] h-[250px] animate-spin-slow bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${FooterEllipsis})`,
                  clear: "both",
                }}
              ></div>
              <a
                href="https://www.instagram.com/merci_lartist/?hl=fr"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute -bottom-[7.5rem] -right-[0.5rem] w-[75px] h-[75px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${FooterInstaLogo})`,
                    clear: "both",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-wrap">
          <div className="w-10/12">
            {/* First sub-column */}
            <div className="flex flex-wrap">
              <div className="w-full">{footerTranslation.phoneNumber}</div>
            </div>
            {/* Second sub-column */}
            <div className="flex flex-wrap w-1/2 md:w-full">
              <div className="md:w-1/2">{footerTranslation.mailAddress}</div>
              <div
                onClick={handleShowLegalMentions}
                className="cursor-pointer hover:underline md:block w-auto"
              >
                {footerTranslation.legalMentions}
              </div>
            </div>
            {/*             <div className="flex flex-wrap md:hidden">
              <div
                onClick={handleShowLegalMentions}
                className="cursor-pointer hover:underline w-full"
              >
                {footerTranslation.legalMentions}
              </div>
            </div>
 */}{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
