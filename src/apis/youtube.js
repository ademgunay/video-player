import axios from 'axios';

const API_KEY = 'AIzaSyCQyXrMjC8bAlLsH_eyurwX-Y_J-welo1k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY
    }
});