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

const Footer = () => {
  const { css, renderer } = useFela();
  const keyframe = (props) => ({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  });
  const rotate = renderer.renderKeyframe(keyframe, {});

  return (
    <footer id="contact">
      <Container fluid className={css(footer({ rotate }))}>
        <Row className="footer-row">
          <Col xs={10}>
            <Row>
              <Col>{footerTranslation.street}</Col>
              <Col xs={7}>{footerTranslation.weekDays}</Col>
            </Row>
            <Row>
              <Col>{footerTranslation.postalCode}</Col>
              <Col xs={7}>{footerTranslation.workHours}</Col>
            </Row>
          </Col>
          <Col xs={2}>
            <div style={{ position: "relative" }}>
              <div className="footer-row--ellipsis"></div>
              <div className="footer-row--insta-logo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Row>
              <Col>{footerTranslation.phoneNumber}</Col>
            </Row>
            <Row>
              <Col>{footerTranslation.mailAddress}</Col>
            </Row>
          </Col>
          <Col xs={8}>
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
