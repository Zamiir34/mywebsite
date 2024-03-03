const user=document.querySelector(".login");
const userIcon=document.getElementById('user-icon');

userIcon.onclick = () => {
   user.classList.add('active')
}

const closee=document.querySelector('#Close-r');

closee.addEventListener('click',()=>{
   user.classList.remove('active')
})
