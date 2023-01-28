class AppUrl{
    static BaseURL ='http://127.0.0.1:8000/api';


    static UsersList(page,per_page){
        return this.BaseURL+`/pessoas/?page=${page}&per_page=${per_page}`;
    }
    static UserDelete(id){
        return this.BaseURL+`/pessoas/${id}`;
    }
    static UserId(id){
        return this.BaseURL+`/pessoas/${id}`;
    }

    static UserEdit(id){
        return this.BaseURL+`/pessoas/${id}`;
    }
    static CreateUser(){
        return this.BaseURL+`/pessoas`;
    }
    static UserVerify(){
        return this.BaseURL+`/pessoas/email`;
    }
}

export default AppUrl;