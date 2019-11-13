import React from "react";
import { Input } from "antd";
import { Col, Row } from "antd";
import { Button } from "antd";
import API from "../util/API";

class Register extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
    }

    handleNameInput = (event) => {
        const { id , value } = event.target;
        this.setState({
            [id]: value
        })
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

    handlePassword2Input = (event) => {
        const { id , value } = event.target;
        this.setState({
            [id]: value
        })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();
        const { name, email, password, password2 } = this.state;

        API.createUser({
            name: name,
            email: email,
            password: password,
            password2: password2
        }).then(res => {
            console.log("User Registered");
        })
    }

    render() {
        const { name, email, password, password2} = this.state;

        return (
            <div>
                <Row>
                    <Col span={6}/>
                    <Col span={12}>
                        <h3>Name</h3>
                        <Input 
                        placeholder="Enter Name:"
                        type="text"
                        id="name"
                        value={name}
                        onChange={this.handleNameInput}
                        />

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

                        <h3>Confrim Password</h3>
                        <Input 
                        placeholder="Repeat Password:"
                        type="password"
                        id="password2" 
                        value={password2}
                        onChange={this.handlePassword2Input}
                        />

                        <Button onClick={this.handleSubmitInput}>Register</Button>;
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Register;
