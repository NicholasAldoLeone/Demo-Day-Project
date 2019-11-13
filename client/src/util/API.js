import axios from "axios";

export default {
    getAllData: function () {
        return axios.get("/api/database/all");
    },

    getQuizData: function (id) {
        return axios.get("/api/database/id/" + id);
    },

    createUser: function (userInfo) {
        return axios.post("/api/database/register", userInfo);
    },

    getUser: function(loginInfo) {
        console.log("Login Info: ", loginInfo);
        return axios.post("/api/database/login", loginInfo);
    }
}