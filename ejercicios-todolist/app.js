document.addEventListener("DOMContentLoaded", function(){
    let btnAdd = document.getElementById("btnAdd");
    let btnAddTask = document.getElementById("addTask");
    let btnsEditTask = document.getElementById("edit-btns");
    let btnEditContainer = document.getElementById("btn-edit-container");
    let inputTask = document.getElementById("taskInput");
    let inputTaskEdit = document.getElementById("taskInputEdit");
    let modal = document.getElementById("modal");
    let modalEdit = document.getElementById("modalEdit");
    let taskContainer = document.getElementById("taskContainer");
    let noTasksContainer = document.getElementById("noTasks");
    let close = document.getElementById("close");
    let tasks = [];

    btnAdd.addEventListener("click", function(){
        modal.classList.add('open');
    })

    close.addEventListener("click", function(){
        modal.classList.remove('open');
    })
    
    btnAddTask.addEventListener("click", function(){
        if(inputTask.value != ''){
            tasks.push(
                {
                    nombreTarea: inputTask.value,
                    doneTask: false
                }
            )
            inputTask.classList.remove("void-input");
            inputTask.setAttribute("placeholder", "");
            modal.classList.remove('open');
        }else{
            inputTask.classList.add("void-input");
            inputTask.setAttribute("placeholder", "Agrega el nombre de la tarea");
        }
        
        taskContainer.innerHTML = ""
        tasks.map(function(task, i){
            let taskElement = document.createElement("div");
            let checkIcon = document.createElement("i");
            let editBtns = document.createElement("div");
            checkIcon.classList.add("fa-solid");
            checkIcon.classList.add("fa-check");
            taskElement.classList.add("task");
            taskElement.setAttribute("id", "task-"+i+"");
            taskElement.innerHTML = "<div class='first-div'><div class='check-container check-container"+i+"' id='check-container-"+i+"'></div></div>#"+i+"</div>" +" "+ `<div  class='task-icons-container'><span class="nombre-tarea" id="nombreTarea${i}">${task.nombreTarea}</span> <div class='icon-container'> <div id="deleteTask${i}"><i class='fa-solid fa-trash'></i></div> <div id="editTask${i}"><i class='fa-solid fa-pen'></i></div> </div></div>`;
            if(tasks.length > 0){
                taskContainer.classList.remove("task-flex");
                taskContainer.append(taskElement);
            }else{
                noTasksContainer.classList.add("d-none");
            }

            editBtns.innerHTML = `
                <button class="btn-custom non-background" id="editClose">CANCELAR</button>
                <button class="btn-custom edit-btn" id="editBtnTask${i}">EDITAR</button>
            `

            btnEditContainer.append(editBtns);
            editBtns.classList.add("buttons-container");

            

            document.getElementById(`check-container-${i}`).addEventListener("click", function(){
                if(document.getElementById(`check-container-${i}`).classList.contains("active")){
                    task.doneTask = false;
                    document.getElementById(`check-container-${i}`).innerHTML == "";
                    document.getElementById(`check-container-${i}`).classList.remove("active");
                }else{
                    task.doneTask = true;
                    document.getElementById(`check-container-${i}`).append(checkIcon);
                    document.getElementById(`check-container-${i}`).classList.add("active") ;
                }
            })
            
            if(task.doneTask == true){
                document.getElementById(`check-container-${i}`).append(checkIcon);
                document.getElementById(`check-container-${i}`).classList.add("active");
            }else if(task.doneTask == false){
                document.getElementById(`check-container-${i}`).innerHTML == "";
                document.getElementById(`check-container-${i}`).classList.remove("active");
            }

            document.getElementById(`deleteTask${i}`).addEventListener("click", function(){
                tasks.splice(i, 1);
                document.getElementById(`task-${i}`).remove();
            });

            document.getElementById(`editTask${i}`).addEventListener("click", function(){
                inputTaskEdit.value = task.nombreTarea
                document.getElementById(`editBtnTask${i}`).addEventListener("click", function(){
                    document.getElementById(`nombreTarea${i}`).innerHTML = inputTaskEdit.value;
                    task.nombreTarea = inputTaskEdit.value;
                    modalEdit.classList.remove('open');
                })
                modalEdit.classList.add("open");
            });
        })


        inputTask.value = "";
        if(inputTask.value != ""){
            modal.classList.remove('open');
        }

        let editClose = document.getElementById("editClose");

        editClose.addEventListener("click", function(){
            modalEdit.classList.remove('open');
        });
    })
    

})