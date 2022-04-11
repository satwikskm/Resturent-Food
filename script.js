'use strict'

const icons = document.querySelectorAll('.container-1 .icons i')

let i=0





document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})




setInterval(()=>{
    i++
    // console.log(i)
    let icon = document.querySelector('.container-1 .icons .change') 
    icon.classList.remove('change')
    if(i > 6){
        icons[0].classList.add('change')
        
        i=1
        console.log("if block",i)
    }
    else{
        icon.nextElementSibling.classList.add('change')
           
    }
},4000)