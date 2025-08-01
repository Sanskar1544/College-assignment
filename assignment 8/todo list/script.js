document.addEventListener('DOMContentLoaded', ()=>{

    const taskInput=document.getElementById('textInput');
    const addTaskbtn= document.getElementById('addTask-btn');
    const taskList= document.querySelector('.list');

    const addTask= (event) =>{      //adding task from user//
        event.preventDefault();
        const taskText= taskInput.value.trim();
        if(!taskText){
            return;
        }
    

    const li= document.createElement ('li');
    li.textContent=taskText;
    taskList.appendChild(li);
    taskInput.value='';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', ()=>{
        span.classList.toggle('Completed');
    });


    const deletebtn= document.createElement('button');
    deletebtn.textContent='Remove';
    deletebtn.addEventListener('click', ()=>{
        li.remove();
    });
     li.appendChild(span);
    li.appendChild(deletebtn);
    }


    addTaskbtn.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',(e) =>{
         if(e.key=='Enter'){
            addTask(e);
         }
    
    })
   
}) 