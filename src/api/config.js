import axios from "axios"
import { makeURL } from "../constants/api"

export const getAPI = async (URL, successFn, params = {}, headerConfig = {}) => {
    const token = localStorage.getItem('access_token');

    try {
        const response = await axios({
            method: 'get',
            url: makeURL(URL),
            headers: {
                ...headerConfig,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            params: {
                ...params,
                'format': 'json',
            }
        })

        let data = response.data;
        return successFn(data)
    } catch (error) {
        console.log(error)
    }
}

export const postAPI = (URL, data, successFn, headerConfig = {}) => {
    const token = localStorage.getItem('access_token');

        axios({
            method: 'post',
            data: data,
            url: makeURL(URL),
            headers: {
                ...headerConfig,
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((response) => {
            let data = response.data;
            successFn(data)
        }).catch((error) => {
            console.log(error)
        })
}
