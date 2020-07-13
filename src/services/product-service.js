import http from "../http-common";

class ProductService {

    //fetch all groups
    getAll() {
      return  http.get("/groups");
    }
    //get categories for each groupid
    getCategoriesByGroupId(id){
      return http.get(`/categories/${id}`)
    
    }
    //get items for each categoryId
    getItemsByCategoryId(id){
      return http.get(`/items/${id}`)
    
    }
    
}


export default new ProductService();