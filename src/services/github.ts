import axios from "axios";

export function getGithubRepositories() {
    try {
        return axios.get('https://api.github.com/users/Xavimc04/repos').then(response => {
            return response.data; 
        }).catch((e) => {
            return e;
        })
    } catch (e) {
        return e; 
    }
} 