import axios from "axios";


export default {
    getAllData: function () {
        return axios.get("/api/database/all");
    },

    getQuizData: function (id) {
        return axios.get("/api/database/id/" + id);
    }
}