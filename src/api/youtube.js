import axios from 'axios';

export default axios.create({
baseURL:'http://googlepapis.com/youtube/v3',
params:{
    parts:'snippet',
    maxResult:5,
    key:'[API KEY]'
}


});
 