import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    axios.create({
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;