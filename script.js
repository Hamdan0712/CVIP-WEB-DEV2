const addBtn=document.querySelector('.addTask-btn');
const inputTask=document.querySelector('.taskinput');
let pendingTask=document.querySelector('.taskleft-number');
const taskleft=document.querySelector('.taskleft');
const emptyText=document.querySelector('.empty-text');
const taskContainer=document.querySelector('.taskAdd-container')

const deleteTask=document.querySelector('.delete-btn');
const mainContent=document.querySelector('.main-task');
const checkbox=document.querySelector('#check-box');
const listContainer=document.querySelector('#list-container');
const app=document.querySelector('.app-main');



 let taskcount=0;


// let text=document.createElement("p");
// text.innerText=`You Have ${listContainer.getElementsByTagName('li'.length)} task(s) to Complete `;

// text.classList.add("taskleft");

// app.appendChild(text)
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
      const task=listContainer.getElementsByTagName("li").length;
   console.log(task);

      // text.innerText=`You Have ${task} task(s) to Complete`;
      // pendingTask.innerHTML='';
      pendingTask.innerHTML=` ${task}`;
       
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
      taskcount--;
   
   const task=listContainer.getElementsByTagName("li").length;
   console.log(task);

      // text.innerText=`You Have ${task} task(s) to Complete`;
      pendingTask.innerHTML=` ${task}`;

   saveReload();
}

},false)





function saveReload(){
 localStorage.setItem("addListt ",listContainer.innerHTML);
//  localStorage.setItem("taskh",text.innerText);
 localStorage.setItem("taskh2",pendingTask.innerText)
}

function displayList(){
//   text.innerText=localStorage.getItem("taskh");
  pendingTask.innerText=localStorage.getItem("taskh2")
  listContainer.innerHTML=localStorage.getItem("addListt ");
}


displayList();