import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://meal-plan-fb49e.firebaseio.com/'
});

export default instance;