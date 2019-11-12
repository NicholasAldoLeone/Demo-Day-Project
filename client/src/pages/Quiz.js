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
            classNames: ['', '', '', ''],
            results: [],
            id: "",
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        // this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.resetClasses = this.resetClasses.bind(this)
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
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
                    id: res.data._id,
                    total: res.data.questions.length
                }),
            )
            .catch(err => console.log(err));
    };
    pushData(nr) {
        this.setState({
            nr: this.state.nr + 1
        });
    }
    resetClasses = () => {
        this.setState({
            classNames: ['', '', '', '']
        })
    }
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
            this.props.history.push("/finished");
        }

        else {
            this.setState({
                showButton: false,
                questionAnswered: false,
            });
        }
        console.log(this.state.questionAnswered)
        this.resetClasses()
    }
    checkAnswer = (obj) => {
        let { score } = this.state;

        console.log(obj);
        if (!this.state.questionAnswered) {
            let isCorrect = obj.isCorrect;
            let answerIndex = obj.a;
            let updatedClassNames = this.state.classNames;
            if (isCorrect) {
                updatedClassNames[answerIndex] = 'right';
                
                let newScore = score + 1

                this.setState({
                    score: newScore
                })
            }
            else {
                console.log("Incorrect")
                updatedClassNames[answerIndex] = 'wrong';
                console.log("Score:" + score);
            }
            this.setState({
                classNames: updatedClassNames
            })
            this.handleShowButton();
        }
    }
    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }
    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { nr, total, showButton, classNames } = this.state;
        let stuff = this.state.results

        if (stuff.length !== 0) {
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

                                            <Answers answers={stuff[nr].answers} classes={classNames} checkAnswer={this.checkAnswer} increaseScore={this.handleIncreaseScore} />

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
        else {
            return <h1>Ain't got no</h1>
        }
    }
};

export default Quiz;