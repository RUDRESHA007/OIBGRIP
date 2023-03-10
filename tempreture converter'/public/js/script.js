const value = document.querySelector('.value').value;
const from_degree = document.querySelector('.from').value;
const to_degree = document.querySelector('.to').value;
const calculate_btn=document.getElementById('calculate')

calculate_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(value);
})
