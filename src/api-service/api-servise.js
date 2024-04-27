import axios from "axios";

     const BASE_URL =  'https://youtube-v31.p.rapidapi.com'
const options = {

    params: {
        maxResults:'50'
    },
    headers: {
        'X-RapidAPI-Key': 'dac5a204famshe3d387b30de20c5p1e7b1cjsne4fd3d52f082',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const ApiService = {
    async fetching(url) {
        const response = await axios.get(  `${BASE_URL}/${url}`, options)
        return response.data
    }
}
