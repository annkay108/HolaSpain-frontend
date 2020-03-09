import axios from 'axios';

class User{
    constructor(){
        this.auth = axios.create({
            baseURL: "http://localhost:5000",
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
}

const userService = new User();

export default userService;