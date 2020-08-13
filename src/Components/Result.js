import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import _ from "underscore";
import $ from "jquery";

function Result(props) {
  useEffect(() => {
    console.log($(".ResultScreen").prop("innerHTML"));
  }, []);
  console.log(props);
  return (
    <div className="ResultScreen">
      <h2>Your QWIZ Result</h2>
      {_.map(props.questions, (question, index) => {
        return (
          <React.Fragment>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                <span
                  dangerouslySetInnerHTML={{ __html: question.question }}
                ></span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Your Answer:{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.useranswered[index]
                  }}
                ></span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Correct Answer:{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.correctanswers[index]
                  }}
                ></span>
              </ListGroup.Item>
            </ListGroup>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Result;
