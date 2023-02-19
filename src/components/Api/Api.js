
class Api {
    constructor() {
        this.token = localStorage.getItem("token");
        this.id = localStorage.getItem("user.id");
        this.path = "https://api.react-learning.ru";
        this.group = "sm8"
    }
    
//методы 

getAllProducts() {
    return fetch(`${this.path}/products`, {
        headers: {
            "authorization": `Bearer ${this.token}`
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

productInfo(id) {
    return fetch(`${this.path}/products/${id}`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    }
)}

getUserInfo(id) {
    return fetch(`${this.path}/v2/${this.group}/users/${id}`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    })
}

addProduct(body) {
    return fetch(`${this.path}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${this.token}`
            },
        body: JSON.stringify(body)
    })
}

editProduct(id, body) {
    return fetch(`${this.path}/products/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${this.token}`
            },
        body: JSON.stringify(body)
    })
}

deleteProduct(id) {
    return fetch(`${this.path}/products/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${this.token}`
            }
    })
}

getProductComments(id) {
    return fetch(`${this.path}/products/review/${id}`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    })
}

addComment(body, id) {
    return fetch(`${this.path}/products/review/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${this.token}`
            },
        body: JSON.stringify(body)
    })
}

deleteComment(postId, commentId) {
    return fetch(`${this.path}/products/review/${postId}/${commentId}`, {
        method: "DELETE",
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