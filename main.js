const user=document.querySelector(".login");
const userIcon=document.getElementById('user-icon');

userIcon.onclick = () => {
   user.classList.add('active')
}

const closee=document.querySelector('#Close-r');

closee.addEventListener('click',()=>{
   user.classList.remove('active')
})

const product=[
 {
      id: 0,
      Image:'/Image/product-1.jpg',
      title:'HP Labtop',
      price: 900
   
},
{
   id: 1,
   Image:'Image/product-5.jpg',
   title:'Smart Watch',
   price: 80

},
{
   id: 2,
   Image:'img/product-3.jpg',
   title:'Hearphone',
   price: 50

},
]
const categories=[...new Set(product.map((item)=>{return item}))]
document.getElementById('searchbar').addEventListener('keyup',(e)=>{
   const searchData=e.target.value.toLowerCase();
   const filterData = categories.filter((item)=>{
      return(
         item.title.toLocaleLowerCase().includes(searchData)
      )
   })
   displayItem(filterData)
});
const displayItem = (item)=>{
   document.getElementById('root').innerHTML=item.map((item)=>{
      var {Image,title,price}=item;
      return(
         `<div class="box">
            <div class="img-box>
               <img class='img' src=${Image}></img>
            </div>"
            <div class='button'>
               <p>${title}</p>
               <h2>$ ${price}.00</h2>
               <button>Add to cart</button>
            </div>
         </div>`
      )
   }).join('')

};
displayItem(categories);