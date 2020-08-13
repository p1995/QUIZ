import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  anyCategoryQuiz,
  fetchAnyCategory
} from "../Redux/CombinedActionCreator";
import { default as _ } from "underscore";
import { FaHatWizard } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { default as $ } from "jquery";
import Result from "./Result";
var correctanswers = [];
var useranswered = [];
function AnyCategory(props) {
  const [showResultPage, setshowResultPage] = useState(false);
  const submit = () => {
    //alerts
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleanswers()
        },
        {
          label: "No",
          onClick: () => alert("Click No")
        }
      ]
    });
  };
  const reset = () => {
    //alerts
    confirmAlert({
      title: "Confirm to Reset",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => $('input[type="radio"]').prop("checked", false)
        },
        {
          label: "No",
          onClick: () => alert("Click No")
        }
      ]
    });
  };

  const handleanswers = () => {
    correctanswers = _.pluck(props.anycategory, "correct_answer");
    useranswered = _.map($(".question"), question => {
      var answer =
        $(question).find('input[type="radio"]:checked').length !== 0
          ? $(question)
              .find('input[type="radio"]:checked')
              .parents(".input-group")
              .children("input")
              .prop("value")
          : "";
      return answer;
    });
    setshowResultPage(true);
  };
  //
  useEffect(() => {
    // props.anyCategoryfetch;
    props.anyCategoryfetch();

    // setanyCategoryQuizArray(props.)
  }, []);
  return (
    <div className="container" style={{ width: "30%" }}>
      {showResultPage ? (
        <Result
          correctanswers={correctanswers}
          useranswered={useranswered}
          questions={props.anycategory}
        />
      ) : (
        <React.Fragment>
          <h2 style={{ textAlign: "center" }}>
            QWIZ
            <FaHatWizard color="violet" style={{ marginBottom: "11px" }} />
          </h2>
          {_.map(props.anycategory, (quiz, index) => {
            quiz.incorrect_answers.push(quiz.correct_answer); //including correct option
            let options = _.sample(
              quiz.incorrect_answers,
              quiz.incorrect_answers.length
            ); //shuffle the array
            console.log(options);
            return (
              <React.Fragment>
                <div className="question">
                  <b>Question {index + 1}: </b>{" "}
                  <span
                    style={{ color: "green", fontWeight: 700 }}
                    dangerouslySetInnerHTML={{ __html: quiz.question }}
                  ></span>
                  {_.map(options, option => {
                    return (
                      <React.Fragment>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Radio
                              aria-label="Radio button for following text input"
                              name={index}
                            />
                          </InputGroup.Prepend>
                          <FormControl
                            style={{ background: "white" }}
                            aria-label="Text input with radio button"
                            value={option}
                            disabled
                          />
                        </InputGroup>
                        <br />
                      </React.Fragment>
                    );
                  })}{" "}
                </div>
              </React.Fragment>
            );
          })}
          <Button
            variant="outline-warning"
            onClick={() => {
              submit();
            }}
          >
            Submit
          </Button>{" "}
          <Button
            variant="outline-warning"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </Button>
        </React.Fragment>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    anycategory: state.Anycategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    anyCategoryfetch: () => dispatch(fetchAnyCategory())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnyCategory);
