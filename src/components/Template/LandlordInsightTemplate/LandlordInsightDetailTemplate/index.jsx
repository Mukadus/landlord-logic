import React from "react";
import { Container } from "react-bootstrap";

export default function LandlordInsightDetailTemplate({ slug = "" }) {
  const [data, setData] = useState(null);

  return (
    <Container fluid>
      <Row>
        <Col lg={12}></Col>
      </Row>
    </Container>
  );
}
