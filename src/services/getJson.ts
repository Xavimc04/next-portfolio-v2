import axios from "axios";

export function getJsonData() {
    try {
        return axios.get('/application-info.json').then(response => {
            if(response.data) {
                return response.data;
            }
        }).catch((e) => {
            return e;
        })
    } catch (e) {
        return e; 
    }
} 