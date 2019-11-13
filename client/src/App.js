import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "antd/dist/antd.css";
import "./index.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Row>
            <Col span={4}>
              <Navbar/>
            </Col>

            <Col span={18}>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/quiz/:id" component={Quiz}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
              </Switch>
            </Col>
          </Row>
        </div>
      </Router>

    )
  }
}

export default App;
