import React from "react";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

import "./question.css";

function Question({
  length,
  question,
  removeQuestion,
  addQuestion,
  questionIndex,
  handleAnswerInput,
  handleQuestionInput,
  setCorrect
}) {
  return (
    <Card id = "question-card">
      <CardBody>
        <Row>
          <Col xs="10">
            <h2>Question</h2>
            <Input
              onChange={handleQuestionInput}
              name={questionIndex}
              value={question.text}
            />
          </Col>
          <Col xs="2">
            {length !== 1 && (
              <Button
                onClick={() => removeQuestion(questionIndex)}
                color="danger"
              >
                <b>X</b>
              </Button>
            )}
          </Col>
        </Row>
        <h3>Answers</h3>
        <Row>
          {question.answers.map((answer, answerIndex) => (
            <Col key={questionIndex + "answer" + answerIndex} xs="12" sm="6">
              <InputGroup style={{ marginTop: "10px" }}>
                <Input
                  onChange={handleAnswerInput}
                  data-question={questionIndex}
                  data-answer={answerIndex}
                  value={answer.text}
                />
                <InputGroupAddon addonType="append">
                  <Button
                    onClick={() => setCorrect(questionIndex, answerIndex)}
                    color={answer.isCorrect ? "primary" : "secondary"}
                  >
                    √
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          ))}
        </Row>
        {questionIndex === length - 1 && (
          <Button onClick={addQuestion} color="primary">
            Add Question
          </Button>
        )}
      </CardBody>
    </Card>
  );
}

export default Question;
