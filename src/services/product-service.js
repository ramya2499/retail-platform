import http from "../http-common";

class ProductService {

    //fetch all groups
    getAll() {
      return  http.get("/groups");
    }
    //get categories per id
    getCategoriesByGroupId(id){
      return http.get(`/categories/${id}`)
    
    }
    
}


export default new ProductService();