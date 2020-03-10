import axios from 'axios';

class User{
    constructor(){
        this.auth = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        });
    }
    // get all the user
    getAllUser(){
        return this.auth.get("/user", {}).then(({data})=> data);
    }

    // add the user to the contact
    addUser(id){
        return this.auth.post(`/user/add/${id}`, {}).then(({data})=>data);
    }

    // get the user by id
    getUserById(id){
        return this.auth.get(`/user/${id}`,{}).then(({data})=> data);
    }

    // accept the request by id
    AcceptContact(id){
        return this.auth.post(`/user/accept/${id}`).then(()=>console.log("something"));
    }

    setStatus(){
        return this.auth.post("/user/setstatus").then(()=>console.log("set the status to true"));
    }

    updateOne(id,{userName, number, city}){
        return this.auth.put(`/user/${id}`,{userName, number, city}).then(()=>console.log("updated the user profile"));
    }
}

const userService = new User();

export default userService;