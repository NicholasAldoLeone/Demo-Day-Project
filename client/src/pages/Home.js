import React from "react";
import API from "../util/API";
import ViewButton from "../components/ViewButton";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { Card } from "antd";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class Homepage extends React.Component {
    state = {
        list: [],
        title: ""
    }

    componentDidMount() {
        this.loadData();
    }

    changeUrl = (event) => {
        const { value } = event.target
        this.props.history.push("/quiz/" + value);
    }

    loadData = () => {
        API.getAllData().then(res => {
            this.setState({
                list: res.data,
            })
            console.log(this.state);
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span="22">
                        <Layout>
                            <Content>
                                <Col span="24">
                                    {this.state.list.map(stateData => {
                                        return <div>
                                            <Col span="8" style={{ margin: 5 }}>
                                                <Card title={stateData.title}>
                                                    <p>Author: {stateData.author}</p>
                                                    <ViewButton value = {stateData._id} onClick = {this.changeUrl}></ViewButton>
                                                </Card>
                                            </Col>
                                        </div>
                                    })}
                                </Col>
                            </Content>
                            <Footer style = {{textAlign: "center"}}>This is the Footer of the Layout</Footer>
                        </Layout>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Homepage;