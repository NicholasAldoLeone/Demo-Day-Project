import React from "react";
import { Input } from "antd";
import { Col, Row } from "antd";
import { Button } from "antd";
import API from "../util/API";

class Login extends React.Component {
    state = {
        name:"",
        email: "",
        password: "",
    }

    handleEmailInput = (event) => {
        const { id , value } = event.target;
        this.setState({
            [id]: value
        })  
    }

    handlePasswordInput = (event) => {
        const { id , value } = event.target;
        this.setState({
            [id]: value
        }) 
    }

    handleLoginInput = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        API.getUser({
            email: email,
            password: password
        }).then(res => {
            console.log("User found");
            console.log(res.data);
        })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <Row>
                    <Col span={6}/>
                    <Col span={12}>
                        <h3>Email</h3>
                        <Input 
                        placeholder="Enter Email:"
                        type="email"
                        id="email" 
                        value={email}
                        onChange={this.handleEmailInput}
                        />

                        <h3>Password</h3>
                        <Input 
                        placeholder="Enter Password:"
                        type="password"
                        id="password"
                        value={password}
                        onChange={this.handlePasswordInput}
                        />

                        <Button onClick={this.handleLoginInput}>Login</Button>;
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Login;
