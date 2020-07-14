import http from "../http-common";

class ProductService {

    //fetch all groups
    getAll() {
      return  http.get("/groups");
    }
    //get categories for each group
    getCategoriesByGroupId(id){
      return http.get(`/categories/${id}`)
    
    }
     //get items mapped to a group for certain  category
    getItemsByGroupIdCategoryId(groupId,categoryId){
      return http.get(`/items/${groupId}/${categoryId}`)
    
    }


    //get items for mapped to a category
    getItemsByCategoryId(categoryId){
      return http.get(`/items/${categoryId}`)
        
    }
    
}


export default new ProductService();