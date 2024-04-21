import { useRef, useEffect } from "react";
import { useFela } from "react-fela";
import { Col, Container, Row } from "react-bootstrap";
import { footerTranslation } from "./intl";
import FooterEllipsis from "../../assets/img/mla_ellipse_contact_593x593.png";
import FooterInstaLogo from "../../assets/img/mla_picto_instagram_238x238.png";

const footer = ({ rotate }) => ({
  marginBottom: "1rem",
  marginTop: "2rem",
  fontSize: "20px",
  "@media (max-width: 767px)": {
    fontSize: "14px",
  },
  "@media (min-width: 768px)": {
    fontSize: "18px",
  },
  "& .footer": {
    "&-row": {
      "&.first": {
        marginLeft: "3px",
      },
      "@media (min-width: 768px)": {
        marginBottom: "2rem",
      },
      "&--column": {
        display: "flex",
        "&.first": {
          "@media (max-width: 767px)": {
            marginTop: "10rem",
            "& > .col": {
              marginBottom: "2rem",
            },
          },
        },
        "@media (max-width: 767px)": {
          flexDirection: "column",
        },
      },
      "&--ellipsis": {
        animation: `${rotate} 10s infinite linear`,
        backgroundImage: `url(${FooterEllipsis})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        clear: "both",
        width: "250px",
        height: "250px",
        position: "absolute",
        right: "-6rem",
        top: "-2.5rem",
      },
      "&--insta-logo": {
        backgroundImage: `url(${FooterInstaLogo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        clear: "both",
        bottom: "-7.5rem",
        right: "-0.5rem",
        position: "absolute",
        width: "75px",
        height: "75px",
      },
    },
    "&-mobile-mentions": {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
      "@media (min-width: 768px)": {
        display: "none",
      },
    },
    "&-desktop-mentions": {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
      "@media (max-width: 767px)": {
        display: "none",
      },
    },
  },
});

const Footer = ({ setContactRef, showModal }) => {
  const { css, renderer } = useFela();
  const ref = useRef(null);
  const keyframe = (props) => ({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  });
  const rotate = renderer.renderKeyframe(keyframe, {});

  useEffect(() => {
    setContactRef(ref);
  }, [setContactRef]);

  return (
    <footer id="contact" ref={ref}>
      <Container fluid className={css(footer({ rotate }))}>
        <Row className="footer-row first">
          <Col className="footer-row--column first" xs={10}>
            <Col>
              <Row md={6}>{footerTranslation.street}</Row>
              <Row md={6}>{footerTranslation.postalCode}</Row>
            </Col>
            <Col>
              <Row xs={7} md={6}>
                {footerTranslation.weekDays}
              </Row>
              <Row xs={7} md={6}>
                {footerTranslation.workHours}
              </Row>
            </Col>
          </Col>
          <Col xs={2}>
            <div style={{ position: "relative" }}>
              <div className="footer-row--ellipsis"></div>
              <a
                href="https://www.instagram.com/merci_lartist/?hl=fr"
                target="_blank"
                rel="noreferrer"
              >
                <div className="footer-row--insta-logo" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-row">
          <Col>
            <Row>
              <Col>{footerTranslation.phoneNumber}</Col>
            </Row>
            <Row style={{ width: "83%" }}>
              <Col>{footerTranslation.mailAddress}</Col>
              <Col
                onClick={() => showModal("legalMentions")}
                className="footer-desktop-mentions"
              >
                {footerTranslation.legalMentions}
              </Col>
            </Row>
            <Row className="footer-mobile-mentions">
              <Col onClick={() => showModal("legalMentions")}>
                {footerTranslation.legalMentions}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
