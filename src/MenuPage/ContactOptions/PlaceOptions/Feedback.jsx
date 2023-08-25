import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  feedBackNameFirst,
  feedBackNameSecond,
  feedBackNameThird,
  feedBackNameFourth,
  feedBackFirst,
  feedBackSecond,
  feedBackThird,
  feedBackFourth,
} from "../../../ConstantsMenu";

function Feedback() {
  const feedBackData = [
    {
      id: 1,
      name: feedBackNameFirst,
      feedback: feedBackFirst,
      image: "./feedbackFirst.png",
    },
    {
      id: 2,
      name: feedBackNameSecond,
      feedback: feedBackSecond,
      image: "./feedBackFifth.png",
    },
  ];
  const feedBackDataRight = [
    {
      id: 4,
      name: feedBackNameThird,
      feedback: feedBackThird,
      image: "./feedbackSecond.png",
    },
    {
      id: 5,
      name: feedBackNameFourth,
      feedback: feedBackFourth,
      image: "./feedbackThird.png",
    },
  ];

  return (
    <Container className="d-flex justify-content-center ">
      <Row className="justify-content-center">
        <Col
          key={feedBackData.id}
          xs={6}
          lg={12}
          className="d-flex justify-content-center mx-3"
        >
          {feedBackData.map((item) => (
            <Card
              key={item.id}
              className="mx-3  card-special"
              style={{ minWidth: "10rem" }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                className=" d-flex justify-content-center  card-image"
              />

              <Card.Body>
                <h5>
                  <Card.Text className="logoFontSmall text-success card-text">
                    {item.feedback}
                  </Card.Text>
                </h5>{" "}
                <h1>
                  <Card.Title className="card-title">{item.name}</Card.Title>
                </h1>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col
          key={feedBackDataRight.id}
          xs={6}
          lg={12}
          className="d-flex justify-content-center mx-3 my-3"
        >
          {feedBackDataRight.map((item) => (
            <Card
              key={item.id}
              style={{ minWidth: "10rem" }}
              className="mx-3  card-special"
            >
              <Card.Img
                variant="top"
                src={item.image}
                className=" d-flex  justify-content-center  card-image"
              />

              <Card.Body>
                <h5>
                  <Card.Text className="logoFontSmall text-success">
                    {item.feedback}
                  </Card.Text>
                </h5>
                <h1>
                  <Card.Title>{item.name}</Card.Title>
                </h1>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
