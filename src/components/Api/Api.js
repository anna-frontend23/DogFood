

class Api {
    constructor() {
        this.token = localStorage.getItem("token");
        this.path = "https://api.react-learning.ru";
        this.group = 'group-8';
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

userDetail(token) {
    return fetch(`${this.path}/v2/${this.group}/users/me`, {
        headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}` 
        },
    })
}

productInfo(id, token) {
    return fetch(`${this.path}/products/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
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

addProduct(body, token) {
    return fetch(`${this.path}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
            },
        body: JSON.stringify(body)
    })
}

editProduct(id, body, token) {
    return fetch(`${this.path}/products/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
            },
        body: JSON.stringify(body)
    })
}

deleteProduct(id, token) {
    return fetch(`${this.path}/products/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`
            }
    })
}

getProductComments(id, token) {
    return fetch(`${this.path}/products/review/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
}

addComment(body, id, token) {
    return fetch(`${this.path}/products/review/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
            },
        body: JSON.stringify(body)
    })
}

deleteComment(postId, commentId, token) {
    return fetch(`${this.path}/products/review/${postId}/${commentId}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`
            }
    })
}

setLike(id, token) {
    return fetch(`${this.path}/products/likes/${id}`, {
        method: "PUT",
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
}

deleteLike(id, token) {
    return fetch(`${this.path}/products/likes/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`
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