document.addEventListener('DOMContentLoaded', ()=>{

    const taskInput=document.getElementById('textInput');
    const addTaskbtn= document.getElementById('addTask-btn');
    const taskList= document.querySelector('.list');


    addTaskbtn.addEventListener('click',()=>{
        const taskText= taskInput.value.trim('');
        if(taskText===''){
            alert('Write something before add it');
            return;
        }

        const li=document.createElement('li');
        li.textContent=taskText;


        li.addEventListener('click',()=>{
            li.classList.toggle('Complete');
        })

        li.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            li.remove();
        })

        taskList.appendChild(li);
        taskInput.value='';

    });
   
});