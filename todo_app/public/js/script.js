const add = document.querySelector('.add_btn')
const delt = document.querySelector('.dlt_btn')
const edit = document.querySelector('.edit_btn')
// const ankal = document.querySelector('.edit_btn')
const msg = document.querySelector('.msg')

add.addEventListener('click',(e)=>{
    // e.preventDefault();
if (msg.length>0) {
    alert('helo world...');
    // msg.style.top='.5rem'
    setTimeout(()=>{
        msg.style.top='-4rem'

    },2000)
}
    
    
})
// edit.addEventListener('click',(e)=>{
//     e.preventDefault();
//     if(edit.innerHTML=='edit'){
//         edit.innerHTML=='save'
//         console.log('save');

//     }
// })

// delt.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('helo world...');
//     msg.style.top='.5rem'
//     setTimeout(()=>{
//         msg.style.top='-4rem'

//     },2000)
    
// })
// edit.addEventListener('click',(e)=>{
//     e.preventDefault();

//     console.log('helo world...');
//     msg.style.top='.5rem'
//     setTimeout(()=>{
//         msg.style.top='-4rem'

//     },2000)
    
// })