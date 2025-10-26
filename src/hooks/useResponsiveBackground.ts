import { useMediaQuery } from "./useMediaQuery";

interface BackgroundImageUrls {
  mobile: string;
  desktop: string;
}

export const useResponsiveBackground = (
  images: BackgroundImageUrls
): string => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return isMobile ? images.mobile : images.desktop;
};

// Configuration centralisée des images de fond
export const backgroundImages = {
  mobile: "/images/background-mobile.webp",
  desktop: "/images/background-desktop.webp",
};
