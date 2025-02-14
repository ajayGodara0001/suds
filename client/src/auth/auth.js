export const isAuthenticated = () =>{
    const user = localStorage.getItem("sudsUser")
    return user?user : null;
}