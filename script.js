const API_URL= "https://api.npoint.io/eb5a4cb6302afcdb43b9"
///priceEl.innerHTML="2"
function loadData(){ 
  fetch(API_URL).then(res=>res.json()).then(data=>{
    console.log(data)
    console.log(data.product1)
    console.log(data.product1.price)
    console.log(data.product1.name)
    
    /*
     {
       "product1":{
    "name":"BMW M3",
    "price":"$100",
    "img":"https://s1.cdn.autoevolution.com/images/news/here-s-a-bmw-e30-m3-that-almost-anyone-can-afford-photo-gallery-64396_1.jpg"
        }
     }


    */
    
    priceEl.innerHTML = data.product1.price
    nameEl.innerHTML = data.product1.name
    imageEl.src=data.product1.img

    console.log(data)
    console.log(data.product2)
    console.log(data.product2.price)
    console.log(data.product2.name)
    
    /*
     {
       "product1":{
    "name":"BMW M3",
    "price":"$100",
    "img":"https://s1.cdn.autoevolution.com/images/news/here-s-a-bmw-e30-m3-that-almost-anyone-can-afford-photo-gallery-64396_1.jpg"
        }
     }


    */
    
    priceEl2.innerHTML = data.product2.price
    nameEl2.innerHTML = data.product2.name
    imageEl2.src=data.product2.img

    

  })
}

loadData()
