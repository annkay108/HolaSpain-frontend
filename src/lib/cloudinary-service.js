import axios from 'axios';

class Cloudinary {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }
  
    imageUpload (imageFile) {
        return this.auth
        .post('/cloudinary/image', imageFile) 
        .then( ({data}) => data ) 
    }

    applicationUpload (applicationFile){
        return this.auth
        .post('/cloudinary/application', applicationFile)
        .then(({data})=> data)
        }

    documentUpload (documentUpload){
        return this.auth
        .post('/cloudinary/document', documentUpload)
        .then(({data})=> data)
        }
}

  const cloudinaryService = new Cloudinary();
  export default cloudinaryService;