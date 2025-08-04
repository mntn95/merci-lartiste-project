export { handleScrollToRef } from "./handleScrollToRef";

export const openCalendlyPopup = (schedulingUrl: string): void => {
  if (typeof window !== "undefined" && window.Calendly) {
    // Extraction du domaine actuel pour embed_domain
    const currentDomain = window.location.hostname;

    // Ajout des paramètres de customisation à l'URL
    const separator = schedulingUrl.includes("?") ? "&" : "?";
    const customizedUrl = `${schedulingUrl}${separator}primary_color=755018&background_color=d2c5b0&text_color=755018&embed_domain=${currentDomain}&hide_landing_page_details=1&hide_gdpr_banner=1`;

    window.Calendly.initPopupWidget({
      url: customizedUrl,
    });
  } else {
    console.error("Calendly widget not loaded");
  }
};
