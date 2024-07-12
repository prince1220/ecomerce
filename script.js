const API_URL= "https://api.npoint.io/67616547e8742db57378"
const LIKES_API = "https://2753ddad-3cf5-4f91-ae1b-c5eeb317eca5-00-34zff22wt9ynn.spock.replit.dev"
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

  
    /*if(data.product4){ 
     ///undefined is like false , falsy
     priceEl4.innerHTML = data.product4.price
     nameEl4.innerHTML = data.product4.name
     imageEl4.src = data.product4.img
    }else{
      priceEl4.innerHTML = "Error loading :("
     nameEl4.innerHTML = "Error loading"
     imageEl4.src="#"
    }
    */




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

loadData();


/*
loadKey("likes",likesEl)
loadKey("likes2",likesEl2)
likeEl.addEventListener("click",()=>{
  increaseKey("likes",likesEl)
})
dislikeEl.addEventListener("click",()=>{
  decreaseKey("likes2",likesEl)
})


likeEl2.addEventListener("click",()=>{
  increaseKey("likes2",likesEl)
})
dislikeEl2.addEventListener("click",()=>{
  decreaseKey("likes2",likesEl)
})

function loadKey(key,el){
  ///get method
   fetch(LIKES_API+"/"+key).then(res=>res.json()).then(data=>{
    el.innerHTML=data.msg
   })
}

function increaseKey(key,el){
  
  fetch (LIKES_API+"/"+key).then(res=>res.json()).then(data=>{  ///get old likes number
      let Num=data.msg
  
    fetch(LIKES_API, {   ///increase likes number
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        key:key,
        msg:Num+1 ///previous value+1
      }), // body data type must match "Content-Type" header
    }).then(()=>{
      loadKey(key,el);
    })
  })
}

function decreaseKey(key,el){
  
  fetch (LIKES_API+"/"+key).then(res=>res.json()).then(data=>{  ///get old likes number
      let Num=data.msg
  
    fetch(LIKES_API, {   ///increase likes number
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        key:key,
        msg:Num-1 ///previous value+1
      }), // body data type must match "Content-Type" header
    }).then(()=>{
      loadKey(key,el);
    })
  })
}
*/