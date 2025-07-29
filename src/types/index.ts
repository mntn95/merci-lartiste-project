// =============================================
// TYPES GÉNÉRIQUES ET UTILITAIRES
// =============================================

export type Ref<T = HTMLElement> = React.RefObject<T> | null;

export interface BaseComponentProps {
  className?: string;
}

// =============================================
// TYPES NAVIGATION ET RÉFÉRENCES
// =============================================

export interface NavigationRefs {
  appointmentRef: Ref;
  contactRef: Ref;
  pricesRef: Ref;
}

export interface NavigationSetters {
  setAppointmentRef: React.Dispatch<React.SetStateAction<Ref>>;
  setContactRef: React.Dispatch<React.SetStateAction<Ref>>;
  setPricesRef: React.Dispatch<React.SetStateAction<Ref>>;
}

// =============================================
// TYPES MODAL
// =============================================

export type ModalContent = string | React.ReactNode | null;

export interface ModalProps {
  modal: ModalContent;
  showModal: (content: ModalContent) => void;
}

export interface ModalHandler {
  showModal: (content: ModalContent) => void;
}

// =============================================
// TYPES COMPOSANTS PRINCIPAUX
// =============================================

export interface LayoutProps {
  children: React.ReactNode;
}

export interface HeaderProps extends NavigationRefs {}

export interface MainProps
  extends Pick<NavigationSetters, "setAppointmentRef" | "setPricesRef">,
    ModalHandler {}

export interface FooterProps
  extends Pick<NavigationSetters, "setContactRef">,
    ModalHandler {}

export interface NavigationProps extends NavigationRefs {}

// =============================================
// TYPES COMPOSANTS SPÉCIFIQUES
// =============================================

export interface AppointmentComponentProps {
  setAppointmentRef: React.Dispatch<React.SetStateAction<Ref>>;
  showModal: (content: ModalContent) => void;
}

export interface PricesComponentProps {
  setPricesRef: React.Dispatch<React.SetStateAction<Ref>>;
  showModal: (content: ModalContent) => void;
}

export interface ServicesComponentProps {
  showModal: (content: ModalContent) => void;
}

export interface MovingTextProps {
  direction?: "toLeft" | "toRight";
}

export interface PricesTableProps {
  position?: "top" | "bottom";
  marginBottom?: string | number;
}

export interface PriceItemProps {
  label: string;
  price: string;
  position: "left" | "right";
  tablePosition: "top" | "bottom";
}

export interface PricesTableExtendedProps extends PricesTableProps {
  showSecondItem?: boolean;
}

export interface ModalContentProps {
  showModal?: (content: ModalContent) => void;
}

// =============================================
// TYPES VIDEO.JS
// =============================================

export interface MobileVideoSource {
  src: string;
  type: string;
}

export interface MobileVideoOptions {
  autoplay?: boolean | "muted" | "play" | "any";
  controls?: boolean;
  width?: number;
  height?: number;
  loop?: boolean;
  playsinline?: boolean;
  responsive?: boolean;
  fluid?: boolean;
  sources?: MobileVideoSource[];
  [key: string]: any;
}

export interface MobileVideoProps {
  options: MobileVideoOptions;
  onReady?: (player: any) => void;
}

// =============================================
// TYPES INTERNATIONALISATION
// =============================================

export interface NavLabels {
  home: string;
  about: string;
  booking: string;
  contact: string;
  pricesCta: string;
}

export interface BottomNavLabels {
  title: string;
  subTitle: string;
  bookingCta: string;
}

export interface AppointmentLabels {
  title: string;
  desc: string;
  desc_link: string;
}

export interface PricesLabels {
  title: string;
  headerTitle: string;
  topFirstItem: string;
  topFirstPrice: string;
  topSecondItem: string;
  topSecondPrice: string;
  bottomFirstItem: string;
  bottomFirstPrice: string;
  bottomSecondItem: string;
  bottomSecondPrice: string;
  viewAllPricesButton: string;
  fullPriceTableTitle: string;
}

export interface PriceService {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface VideoLabels {
  browserNotSupportedMessage: string;
  playerReadyLog: string;
}

export interface Article {
  title: string;
  content: string[];
}

export interface LegalMentionsLabels {
  title: string;
  cguTitle: string;
  effectiveDate: string;
  introText: string;
  articles: Article[];
}

export interface FooterLabels {
  street: string;
  weekDays: string;
  postalCode: string;
  workHours: string;
  phoneNumber: string;
  mailAddress: string;
  legalMentions: string;
}

export interface ServicesLabels {
  // Messages d'état
  loading: string;
  errorLoading: string;
  noResults: {
    title: string;
    description: string;
  };
  clickInstruction: string;

  // Calendar
  calendar: {
    backButton: string;
    backButtonArrow: string;
    duration: string;
    loadingSlots: string;
    errorSlots: string;
    noSlots: string;
  };

  // Modal
  modal: {
    title: string;
    iframeTitle: string;
  };

  // Service items
  service: {
    viewSlots: string;
    defaultDescription: string;
  };
}

// =============================================
// TYPES PRIX ET SERVICES
// =============================================

export interface PriceItem {
  id: string;
  title: string;
  description?: string;
  price: number;
  duration?: string;
  category?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  isApiData?: boolean;
}

export interface PricesProps {
  items?: PriceItem[];
  onItemClick?: (item: PriceItem) => void;
}

// =============================================
// TYPES RENDEZ-VOUS
// =============================================

export interface AppointmentFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export interface AppointmentProps {
  onSubmit?: (data: AppointmentFormData) => void;
  availableServices?: PriceItem[];
}

// =============================================
// TYPES ÉVÉNEMENTS
// =============================================

export interface ScrollToElementOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

export interface EventHandlers {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

// =============================================
// TYPES ASSETS
// =============================================

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface FontAsset {
  family: string;
  sources: string[];
  weight?: string | number;
  style?: string;
}
