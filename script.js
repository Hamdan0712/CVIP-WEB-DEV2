const addBtn=document.querySelector('.addTask-btn');
const inputTask=document.querySelector('.taskinput');
let pendingTask=document.querySelector('.taskleft-number');
const emptyText=document.querySelector('.empty-text');
const taskContainer=document.querySelector('.taskAdd-container')
const deleteTask=document.querySelector('.delete-btn');
const mainContent=document.querySelector('.main-task');
const checkbox=document.querySelector('#check-box');
const listContainer=document.querySelector('#list-container');



const addList=function(){
   const content=inputTask.value;
   if(!content){
      emptyText.style.opacity='1';
      
   }
   else{
      
      
      let li=document.createElement("li");
      li.innerHTML=content
      listContainer.appendChild(li)
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span)
      
      emptyText.style.opacity='0';



       
}
inputTask.value='';
saveReload();


} 



listContainer.addEventListener('click',function(e){
   if(e.target.tagName=='LI'){
      e.target.classList.toggle("checked")
      
      saveReload();
      
   }
   else if(e.target.tagName="SPAN"){
      e.target.parentElement.remove();


   saveReload();
}

},false)





function saveReload(){
 localStorage.setItem("addListt ",listContainer.innerHTML);
//  localStorage.setItem("taskcount",taskContainer.innerHTML);
}

function displayList(){
//   listContainer.innerHTML=localStorage.getItem("data");
  
  listContainer.innerHTML=localStorage.getItem("addListt ");
}


displayList();