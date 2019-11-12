import React from 'react';
import { Button } from "antd";
import { Row, Col } from "antd";

function Answers(props) {
    console.log(props);
    return (
        <div id="answers">
            <Row>
                <Col span={24}>
                    <Col span={12}>
                        <Button block onClick={(e) => props.checkAnswer({ a: 0, isCorrect: props.answers[0].isCorrect, e })} className={props.classes[0]}> {props.answers[0].text}</Button>

                    </Col>
                    <Col span={12}>
                        <Button block onClick={(e) => props.checkAnswer({ a: 1, isCorrect: props.answers[1].isCorrect, e })} className={props.classes[1]} data-a="2" data-id={props.answers[1].isCorrect}>{props.answers[1].text}</Button>

                    </Col>
                    <Col span={12}>
                        <Button block onClick={(e) => props.checkAnswer({ a: 2, isCorrect: props.answers[2].isCorrect, e })} className={props.classes[2]} data-a="3" data-id={props.answers[2].isCorrect}>{props.answers[2].text}</Button>

                    </Col>
                    <Col span={12}>
                        <Button block onClick={(e) => props.checkAnswer({ a: 3, isCorrect: props.answers[3].isCorrect, e })} className={props.classes[3]} data-a="4" data-id={props.answers[3].isCorrect}>{props.answers[3].text}</Button>

                    </Col>
                </Col>
            </Row>
        </div>
    );
}
export default Answers