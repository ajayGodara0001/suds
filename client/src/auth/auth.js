export const isAuthenticated = () =>{
    const user = JSON.parse(localStorage.getItem("sudsUser"))
    return user?user : null;
}