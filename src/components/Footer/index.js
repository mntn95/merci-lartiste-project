import { useRef, useEffect } from "react";
import { useFela } from "react-fela";
import { Col, Container, Row } from "react-bootstrap";
import { footerTranslation } from "./intl";
import { navTranslation } from "../Header/intl";
import FooterEllipsis from "../../assets/img/mla_ellipse_contact_593x593.png";
import FooterInstaLogo from "../../assets/img/mla_picto_instagram_238x238.png";

const footer = ({ rotate }) => ({
  marginBottom: "1rem",
  marginTop: "2rem",
  fontSize: "24px",
  "& .footer": {
    "&-row": {
      marginBottom: "6rem",
      fontSize: "24px",
      "&--column": {
        display: "flex",
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
  },
});

const Footer = ({ setContactRef }) => {
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
        <Row className="footer-row">
          <Col className="footer-row--column" xs={10}>
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
              <div className="footer-row--insta-logo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>{footerTranslation.phoneNumber}</Col>
            </Row>
            <Row>
              <Col>{footerTranslation.mailAddress}</Col>
            </Row>
          </Col>
          <Col style={{ display: "none" }} xs={8}>
            <Row>&nbsp;</Row> {/* ¯\_(ツ)_/¯ */}
            <Row className="justify-content-end ">
              <Col xs="auto">{navTranslation.home} |</Col>
              <Col xs="auto">{navTranslation.about} |</Col>
              <Col xs="auto">{navTranslation.pricesCta} |</Col>
              <Col xs="auto">{navTranslation.booking}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
