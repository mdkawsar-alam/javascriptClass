//  const rot= document.getElementById('rot');
  
//  const ul= document.createElement('ul');
  
//   rot.appendChild(ul);

//   const li= document.createElement('li');
//   li.innerText=['home ']

// ul.appendChild(li)


//  style
// const boss = document.getElementById('boss');

// boss.style.color='red'
// boss.style.fontSize='52px'
// boss.style.backgroundColor='blue'
// boss.style.textAlign='center'


//  click event

// const btn= document.getElementById('goru');

//  btn.addEventListener('click', ()=>{
//     alert(' hmba hamba ')
//  })
 

 const btn= document.getElementById('btn');
 btn.addEventListener('click',changeImage);

function changeImage(){

    const cat = document.getElementById('cat');
   cat.setAttribute('src', 'dog.jpg');  

}
