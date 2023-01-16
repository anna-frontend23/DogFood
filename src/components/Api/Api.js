
class Api {
    constructor() {
        this.token = localStorage.getItem("token");
        this.id = localStorage.getItem("user.id");
        this.path = "https://api.react-learning.ru";
        this.group = "sm8"
    }
    
//методы 

getAllProducts(token) {
    return fetch(`${this.path}/products`, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
}

signUp(body) {
    body.group = this.group;
    return fetch(`${this.path}/signup`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(body)
    });
}

signIn(body) {
    return fetch(`${this.path}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(body)
        });
    }

userDetail() {
    return fetch(`${this.path}/v2/${this.group}/users/me`, {
        headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${this.token}` 
        },
    })
}

searchProduct(request) {
    return fetch(`${this.path}/products/search?query=${request}`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    })
}





}




export const api = new Api({
    path: 'https://api.react-learning.ru',
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    },
    group: 'sm8',
})