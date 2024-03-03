const API_URL= "https://api.npoint.io/eb5a4cb6302afcdb43b9"

function loadData(){ 
  fetch(API_URL).then(res=>res.json()).then(data=>{
    console.log(data)
  })
}

loadData()