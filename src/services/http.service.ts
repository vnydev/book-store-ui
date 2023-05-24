import axios from 'axios';

const BaseURL = 'http://localhost:3000'

const HttpRequest = async (
    url: string,
    method: string,
    params?: object,
    data?: object,
    headers?: object
    ) => {

    return await axios({
        baseURL: BaseURL,
        url: url,
        method: method,
        params: params,
        data: data,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    })
}

export {
    HttpRequest
}

