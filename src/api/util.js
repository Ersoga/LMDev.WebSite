import axios from 'axios'

const authURL = process.env.API_URL
export const Get = ({str})=>
{
    return axios.get(authURL + str);
}