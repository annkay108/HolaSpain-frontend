import axios from 'axios';

class SetStatus{
    constructor(){
        this.auth = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        });
    }
    setStatusById(id,{title, description}){
        return this.auth.post(`/setstatus/add/${id}`,{title, description}).then(()=> console.log("added the status"))
    }
}

const setStatusService = new SetStatus();

export default setStatusService;