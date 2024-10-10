
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res)=>res.json())
    .then((data)=>showitem(data.categories ))
    .catch((err)=>console.log("error is ",err))
   function  showitem(element){
           randomitem(element.slice(0,6));
   }
function  randomitem(item){
    const cardcontainer=document.getElementById('cardcontainer')
    const my_modal_5=document.getElementById('my_modal_5')
    item.forEach(element => {
         const div=document.createElement('div')
         div.innerHTML=`
                 <div class="   gap-5">
          <div class="items-center">  <img class="w-48 flex  mx-auto h-52 rounded-xl" src="${element.strCategoryThumb}" alt=""></div>
          <div class="text-center md:text-left gap-3">
             <h2 class="text-2xl font-bold ">${element.strCategory}</h2>
             <p>${element.strCategoryDescription}</p>
             <p id="${element.idCategory}" onclick="getid(${element.idCategory})"  >View Details</p>
          </div>
        </div>
         `
         cardcontainer.appendChild(div)

        
    });

}
//show all 
const showall=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((res)=>res.json())
.then((data)=>showallitem(data.categories ))
.catch((err)=>console.log("error is ",err))
}

function  showallitem(item){
const cardcontainer=document.getElementById('cardcontainer')
cardcontainer.innerHTML=''

item.forEach(element => {
     const div=document.createElement('div')
     div.innerHTML=`
             <div class="   gap-5">
      <div class="items-center">  <img class="w-48 flex  mx-auto h-52 rounded-xl" src="${element.strCategoryThumb}" alt=""></div>
      <div class="text-center md:text-left gap-3">
         <h2 class="text-2xl font-bold ">${element.strCategory}</h2>
         <p>${element.strCategoryDescription}</p>
         <p onclick="document.getElementById('my_modal_5').showModal()"  >View Details</p>
      </div>
    </div>
     `
  
     cardcontainer.appendChild(div)
});
}

function getid(id){
   
}



// my_modal_5.innerHTML='';
// const div2= document.createElement('div')
// div2.innerHTML=`
//   <div class="modal-box">
// <div class="   gap-5">
// <h2 class="text-2xl font-bold ">${item.strCategory}</h2>
// <div class="items-center">  <img class="w-full flex  mx-auto rounded-xl" src="${item.strCategoryThumb}" alt=""></div>
// <div class="text-center md:text-left gap-3">
 
//  <p>Category : Chicken</p>
//  <p>Area : Japanese</p>
//  <p>Instructions : AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//  <p>Youtube : https://www.youtube.com/watch?v=WnpbKoYhTEY</p>
// <span class="text-right flex ">  <button onclick="document.getElementById('my_modal_5').close()" class="bg-[#DC3545] btn   text-white">Close </button></span>
// </div>
// </div>
// </div>

// `
// my_modal_5.appendChild(div2)