import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Question from "../components/QuestionInput";
import Axios from "axios";
import "./Create.css";

class Create extends React.Component {
    state = {
        title: "Quiz Name",
        author: "Author Name",
        questions: [
            {
                text: "Enter your question here",
                answers: [
                    { text: "Answer 1" },
                    { text: "Answer 2" },
                    { text: "Answer 3" },
                    { text: "Answer 4", isCorrect: true }
                ]
            }
        ]
    };

    handleTitleAuthorInput = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    handleQuestionInput = e => {
        const { name, value } = e.target;
        const state = { ...this.state };
        state.questions[name].text = value;
        this.setState(state);
    };

    handleAnswerInput = e => {
        const { question, answer } = e.target.dataset;
        const state = { ...this.state };
        state.questions[question].answers[answer].text = e.target.value;
        this.setState(state);
    };

    addQuestion = () => {
        const questionTemplate = {
            text: "Enter your question here",
            answers: [
                { text: "Answer 1" },
                { text: "Answer 2" },
                { text: "Answer 3" },
                { text: "Answer 4", isCorrect: true }
            ]
        };
        const state = { ...this.state };
        state.questions.push({ ...questionTemplate });
        this.setState(state);
    };

    removeQuestion = i => {
        const state = { ...this.state };
        if (state.questions.length !== 1) {
            state.questions.splice(i, 1);
            this.setState(state);
        }
    };

    setCorrect = (question, answer) => {
        const state = { ...this.state };
        state.questions[question].answers = state.questions[question].answers.map(
            answer => ({ text: answer.text })
        );
        state.questions[question].answers[answer].isCorrect = true;
        this.setState(state);
    };

    handleFormSubmit = e => {
        e.preventDefault();
        var title = this.state.title
        var routeTitle = title.toLowerCase().replace(" ", "")

        Axios.post('api/database/create', {
            title: this.state.title,
            routeTitle: routeTitle,
            author: this.state.author,
            questions: this.state.questions
        })
            .then(response => {
                if (!response.data.errmsg) {
                    alert("quiz added successfully");
                }
            }).catch(error => {
                console.log("there was a problem: ", error);
            })
    }

    render() {
        const { title, author, questions } = this.state;
        return (
            <section>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Jumbotron className="Jumbotron">
                                <form>
                                    <h3>Quiz Name</h3>
                                    <input className="quiz-title"
                                        type="text"
                                        placeholder={title}
                                        name="title"
                                        value={title}
                                        onChange={this.handleTitleAuthorInput}
                                    />
                                    <h3 ClassName="quiz-author">Author</h3>
                                    <input
                                        type="text"
                                        placeholder={author}
                                        name="author"
                                        value={author}
                                        onChange={this.handleTitleAuthorInput} />
                                </form>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        {questions.length !== 0 ? (
                            questions.map((question, i) => (
                                <Col key={"question" + i} sm="12" md="6">
                                    <Question
                                        length={questions.length}
                                        question={question}
                                        questionIndex={i}
                                        handleAnswerInput={this.handleAnswerInput}
                                        handleQuestionInput={this.handleQuestionInput}
                                        removeQuestion={this.removeQuestion}
                                        addQuestion={this.addQuestion}
                                        setCorrect={this.setCorrect}
                                    />
                                </Col>
                            ))
                        ) : (
                                <h1>No Questions Yet</h1>
                            )}

                    </Row>

                    <Row className="submitbtn">
                        <Col className="text-centers">
                            <button className="btn btn-primary" onClick={this.handleFormSubmit} id="submit-btn">Submit</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}


export default Create;