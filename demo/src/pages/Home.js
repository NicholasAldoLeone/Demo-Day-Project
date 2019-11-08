import React from "react";
import API from "../util/API";
import AllQuizzes from "../components/AllQuizzes";

class Homepage extends React.Component {
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        API.getAllData().then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <div>Welcome to the homepage feel free to browse around
                <AllQuizzes/>
            </div>
            
        )
    }
}

export default Homepage;