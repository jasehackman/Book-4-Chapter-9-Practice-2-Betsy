import nav from "./nav.js"
import data from "./data.js"
import componentBuilder from "./component.js"


$("body").append(nav());

let productFetch = () => {
  data.getfromAPI().then(apiData => {
    $("body").append(componentBuilder(apiData))
  })}

productFetch();