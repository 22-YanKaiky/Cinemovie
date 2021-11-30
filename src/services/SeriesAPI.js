import api_url from "./api_url";
import axios from  'axios'
const SERIESAPI = api_url + "/series"

export function videoPost(props){
    axios.post(`${SERIESAPI}`, props)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });         
}