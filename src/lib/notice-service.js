import axios from "axios";

class Notice{
    constructor(){
        this.auth = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        });
    }

    addTheNotice({title, description}){
        return this.auth.post("/notice/add",{title, description}).then(({data}) => data);
    }

    getAllNotice(){
        return this.auth.get("/notice",{}).then(({data})=> data);
    }
}

const noticeService = new Notice();

export default noticeService;