import React, { useRef, useEffect } from "react";
import FooterEllipsis from "../../assets/img/contact_ellipsis.png";
import FooterInstaLogo from "../../assets/img/insta_logo.png";
import { useModal, useNavigation } from "../../contexts";
import { footerLabels } from "../../labels/footer";

const Footer: React.FC = React.memo(() => {
  const ref = useRef<HTMLElement>(null);
  const { setContactRef } = useNavigation();
  const { showModal } = useModal();

  useEffect(() => {
    setContactRef(ref);
  }, [setContactRef]);

  const handleShowLegalMentions = React.useCallback((): void => {
    showModal("legalMentions");
  }, [showModal]);

  return (
    <footer id="contact" ref={ref}>
      <div className="w-full px-3 mb-4 mt-8 text-sm md:text-lg">
        <div className="flex flex-wrap ml-[3px] mb-4 md:mb-8">
          <div className="w-10/12 flex flex-col md:flex-row mt-40 md:mt-0">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <div className="lg:w-1/2">{footerLabels.street}</div>
              <div className="lg:w-1/2">{footerLabels.postalCode}</div>
            </div>
            <div className="md:w-1/2">
              <div className="lg:w-1/2">{footerLabels.weekDays}</div>
              <div className="lg:w-1/2">{footerLabels.workHours}</div>
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
              />
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
        <div className="flex flex-wrap">
          <div className="w-10/12">
            <div className="flex flex-wrap">
              <div className="w-full">{footerLabels.instagramUrl}</div>
            </div>
            <div className="flex flex-wrap w-1/2 md:w-full">
              <div className="md:w-1/2">{footerLabels.mailAddress}</div>
              <div
                onClick={handleShowLegalMentions}
                className="cursor-pointer hover:underline md:block w-auto"
              >
                {footerLabels.legalMentions}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
