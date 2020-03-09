import axios from "axios";

class Notice{
    constructor(){
        this.auth = axios.create({
            baseURL: "http://localhost:5000",
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