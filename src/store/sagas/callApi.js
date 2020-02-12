import axios from 'axios';

export function callApi(url, method, options, headers, api) {
    const axiosConfig = {
        method,
        headers,
        url
    };

    if (options) {
        if (method === 'GET') axiosConfig.params = options;
        else axiosConfig.data = options;
    }
    console.log(axiosConfig);
    return axios(axiosConfig)
        .then((response) => response)
        .catch((error) => { throw error; });
}