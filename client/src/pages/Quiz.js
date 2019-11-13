import React from "react";
import API from "../util/API";
import Answers from "../components/Answers/Answers"
import { Icon } from 'antd';
import { Layout } from "antd";
import { Col, Row } from "antd";
import { Card } from "antd";
import { Button } from "antd";

const { Content, Footer } = Layout;

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: 0,
            showButton: false,
            questionAnswered: false,
            score: 0,
            results: [],
            id: "",
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.checkAnswer.bind(this)
    }

    componentDidMount() {
        var id = window.location.href;
        var newId = id.split("z/");
        this.getbyId(newId[1]);
    }

    getbyId = (params) => {
        API.getQuizData(params)
            .then(res =>
                this.setState({
                    results: res.data.questions,
                    question: res.data.questions[0].text,
                    total: res.data.questions.length
                }),
            )
            .catch(err => console.log(err));
    };

    pushData(nr) {
        this.setState({
            nr: this.state.nr + 1
        });
    };

    nextQuestion() {
        let { nr, } = this.state;
        let { total } = this.state;
        let { score } = this.state;
        this.pushData(nr);
        console.log("nr", nr);
        console.log("total", total)
        console.log("Score:", score);

        if (nr > total - 2) {
            console.log("Quiz finished");
            
        }

        else {
            this.setState({
                showButton: false,
                questionAnswered: false,
            });
        }
    };

    checkAnswer = (obj) => {
        let { score } = this.state;

        console.log(obj);
        if (!this.state.questionAnswered) {
            let isCorrect = obj.isCorrect;

            if (isCorrect) {
                let newScore = score + 1

                this.setState({
                    score: newScore
                })
            }
            else {
                console.log("Incorrect")
                console.log("Score:" + score);
            }

            this.handleShowButton();
        }
    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    render() {
        let { nr, total, showButton, score } = this.state;
        let stuff = this.state.results

        if (stuff.length !== 0 && nr < total) {
            return (
                <Row>
                    <Col span={22}>
                        <Layout>
                            <Content>
                                <Col span={5} />
                                <Col span={14}>
                                    <Card>
                                        <div className="centerDiv">
                                            <div id="question">
                                                <h4>Question {nr + 1}</h4>
                                                <p>{stuff[nr].text}</p>
                                            </div>

                                            <Answers answers={stuff[nr].answers} checkAnswer={this.checkAnswer} />

                                            <div id="submit">
                                                {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr === total ? 'Finish quiz' : 'Next question'}</button> : null}
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Content>
                        </Layout>
                    </Col>
                </Row>
            );
        }
        else if (nr > total - 2) {
            return (
                <div>Congrats you completed the Quiz and got {score} / {total} correct</div>
            )
        }
        else {
            return (
                <div>Loading Quiz</div>
            )
        }
    }
};

export default Quiz;