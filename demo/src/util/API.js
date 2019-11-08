import axios from "axios";

export default {
    getAllData: function () {
        return axios.get("/api/database/all");
    }
}