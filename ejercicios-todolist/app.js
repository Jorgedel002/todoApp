document.addEventListener("DOMContentLoaded", function(){
    let btnAdd = document.getElementById("btnAdd");
    let btnAddTask = document.getElementById("addTask");
    let inputTask = document.getElementById("taskInput");
    let modal = document.getElementById("modal");
    let taskContainer = document.getElementById("taskContainer");
    let noTasksContainer = document.getElementById("noTasks");
    let close = document.getElementById("close");
    let tasks = []

    btnAdd.addEventListener("click", function(){
        modal.classList.add('open');
        console.log("click")
    })

    close.addEventListener("click", function(){
        modal.classList.remove('open');
    })

    btnAddTask.addEventListener("click", function(){
        tasks.push({nombreTarea: inputTask.value})

        taskContainer.innerHTML = ""
        tasks.map(function(task, i){
            let taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.innerHTML = "<div>#"+i+"</div>" +" "+ `<div  class='task-icons-container'>${task.nombreTarea} <div class='icon-container'> <div><i class='fa-solid fa-trash'></i></div> <div><i class='fa-solid fa-pen'></i></div> </div></div>`;
            
            console.log(i)
            
            if(tasks.length > 0){
                taskContainer.classList.remove("task-flex")
                taskContainer.append(taskElement)
            }else{
                noTasksContainer.classList.add("d-none")
            }
            
        })

        inputTask.value = ""
        modal.classList.remove('open');
    })

})