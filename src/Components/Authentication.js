class Authentication{
    setLoggedInUser=(username)=>{
        localStorage.setItem("loggedInUser",username)
    }
    getLoggedInUser=()=>{
        return localStorage.getItem("loggedInUser")
    }
    isLoggedIn=()=>{
        let user=this.getLoggedInUser();
        return user!=null && user!=undefined ? true : false;
    }
}
export default new Authentication();