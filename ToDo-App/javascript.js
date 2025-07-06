let btn = document.getElementById('btn');
let input = document.getElementById('get-text');
let ul = document.getElementById('list');

btn.addEventListener('click',()=>{
    if(input.value === ""){
       alert('Kindly Enter Your Task');
    }
    else{
        let ele = document.createElement('li');
        ele.innerHTML= input.value;
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`
        ul.appendChild(ele);
        ele.appendChild(span);
        input.value="";
        SaveData();
        span.addEventListener("click",()=>{
        ul.removeChild(ele);
    })
    }
})
function SaveData(){
    localStorage.setItem('data',ul.innerHTML)
}
// function showData(){
//     ul.innerHTML = localStorage.getItem("data");
// }
// showData();
