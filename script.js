const API_URL= "https://api.npoint.io/67616547e8742db57378"
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
    

 
    
    priceEl2.innerHTML = data.product2.price
    nameEl2.innerHTML = data.product2.name
    imageEl2.src=data.product2.img



    priceEl3.innerHTML = data.product3.price
    nameEl3.innerHTML = data.product3.name
    imageEl3.src=data.product3.img

  
    if(data.product4){ 
     ///undefined is like false , falsy
     priceEl4.innerHTML = data.product4.price
     nameEl4.innerHTML = data.product4.name
     imageEl4.src = data.product4.img
    }else{
      priceEl4.innerHTML = "Error loading :("
     nameEl4.innerHTML = "Error loading"
     imageEl4.src="#"
    }
    




///slider script
    var currentIndex = 0;
var contents = document.querySelectorAll('.slider-content');
var maxIndex = contents.length - 1;

function nextImage() {
  currentIndex++;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  contents.forEach(function(content) {
    content.classList.remove('active');
  });

  contents[currentIndex].classList.add('active');
}

setInterval(nextImage, 3000);




  })
}

loadData()
