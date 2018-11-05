let api = {
  getfromAPI () {
    return fetch("http://localhost:8088/products")
    .then (data => data.json())
    }
}

export default api