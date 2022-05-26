import { useFela } from "react-fela";
import { Col, Container, Row } from "react-bootstrap";
import FooterEllipsis from "../../assets/img/mla_ellipse_contact_593x593.png";

const footerContainer = () => ({
  marginTop: "2rem",
  fontSize: "24px",
});

const footerEllipsis = ({ rotate }) => ({
  animation: `${rotate} 10s infinite linear`,
  backgroundImage: `url(${FooterEllipsis})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "250px",
  height: "250px",
  position: "absolute",
  right: "-10rem",
  top: "-2.5rem",
});

const footerContainerItem = () => ({
  marginBottom: "6rem",
  fontSize: "24px",
});

const Footer = () => {
  const { css, renderer } = useFela();
  const keyframe = (props) => ({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  });
  const rotate = renderer.renderKeyframe(keyframe, {});

  return (
    <Container className={css(footerContainer)}>
      <Row className={css(footerContainerItem)}>
        <Col xs={10}>
          <Row>
            <Col>11 impasse le verger</Col>
            <Col xs={7}>Du mardi au samedi</Col>
          </Row>
          <Row>
            <Col>95629 Parmain</Col>
            <Col xs={7}>De 15h à 20h</Col>
          </Row>
        </Col>
        <Col xs={2}>
          <div style={{ position: "relative" }}>
            <div className={css(footerEllipsis({ rotate }))}></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Row>
            <Col>- 06 71 10 90 09</Col>
          </Row>
          <Row>
            <Col>- merci-lartiste@gmail.com</Col>
          </Row>
        </Col>
        <Col xs={8}>
          <Row className="justify-content-end mt-4">
            <Col xs="auto">Accueil</Col>
            <Col xs="auto">A propos</Col>
            <Col xs="auto">Tarifs et Prestations</Col>
            <Col xs="auto">Réservation</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
