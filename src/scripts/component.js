let componentBuilder = (apiData) => {
  let componentCompile = "";
    apiData.forEach(eachProductObj => {
    componentCompile += `
    <div class = "product_div" value = ${eachProductObj.id}>
      <img class = "product_image" src = ${eachProductObj.image} alt = ${eachProductObj.title}>
      <h3 class = "product_title">${eachProductObj.title}</h3>
      <h4 class = "product_price">$${eachProductObj.price}</h4>
      <p class = "product_description">${eachProductObj.description}</p>
    </div>`
    
  })
  
  return componentCompile
}

export default componentBuilder;