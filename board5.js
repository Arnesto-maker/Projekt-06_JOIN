function edit(taskId) {
    document.getElementById('overlay-content').innerHTML = templateEditTask()
    document.querySelector('.overlay').setAttribute('style', 'display:flex')

    eventHandlingFltEditTaskPrio(taskId)
    eventHandlingEditAssignTo()
    eventhandlingButtonEditSubtask()
    eventHandlingFocusSubtaskInput()

    document.querySelector('#edit-title').value = tasks[taskId].title
    document.querySelector('#edit-desc').value = tasks[taskId].description
    document.querySelector('#edit-due-Date').value = convertValueTypDate (tasks[taskId].dueDate)

    editPriority[0] = tasks[taskId].priority
    editAssignTo = tasks[taskId].assignedTo
    subtask = editSubtaskArrayTransformation((tasks[taskId].subtask))
    
    showPriority(editPriority)   
    showEditAssigned()
    editedSubtaskShow(subtask)

}

function editSubtaskArrayTransformation(array) {
    let arrayResult;
    if (!array || array === 'no subtask selected') {
        arrayResult = []
        return arrayResult
    }
    arrayResult = array.map(task => task.text)
    return arrayResult
}

function convertValueTypDate (string){
    const parts = string.split('/')
    const date = `${parts[2]}-${parts[1]}-${parts[0]}`;    
    return date
}



//                      Subtask Function at edit Task : edit subtask add edit task                         //

//eventhandlingButtonEditSubtask()
function eventhandlingButtonEditSubtask() {
    const buttonEditSubtask = document.getElementById("plus-add-subtask")
    buttonEditSubtask.addEventListener('click', () => {
        eventHandlingOpenSubtaskFunc()
        eventHandlingButtonSubtaskClose()
    })
    return
}

function eventHandlingOpenSubtaskFunc() {
    const par = editSubtaskIcon_Input_Parameter();
    editSubtaskButtonAndPlaceholderChange_at_func_start(par.editSubtaskIconBox, par.editSubtaskInput)
    return
}

function eventHandlingButtonSubtaskClose() {
    const buttonSubtaskEditClose = document.querySelector('.edit-close-button')
    buttonSubtaskEditClose.addEventListener('click', () => {
        const par = editSubtaskIcon_Input_Parameter();
        editSubtaskButtonAndPlaceholderChange_at_reset(par.editSubtaskIconBox, par.editSubtaskInput)
        eventhandlingButtonEditSubtask()
    })
    return
}

function editSubtaskIcon_Input_Parameter() {
    const parameter = {
        editSubtaskInput: document.getElementById("flt-edit-subtasks"),
        editSubtaskIconBox: document.querySelector('#edit-subtask-icon-box'),
    }
    return parameter
}

function editSubtaskButtonAndPlaceholderChange_at_reset(editSubtaskIconBox, editSubtaskInput) {
    editSubtaskIconBox.innerHTML = templateEditSubtaskReset();
    editSubtaskInput.setAttribute('Placeholder', "Add new Subtask")
    editSubtaskInput.value = ''
    editSubtaskInput.blur()
}

function editSubtaskButtonAndPlaceholderChange_at_func_start(editSubtaskIconBox, editSubtaskInput) {
    editSubtaskIconBox.innerHTML = templateEditSubtaskFunc();
    editSubtaskInput.focus()
    editSubtaskInput.setAttribute('Placeholder', '')
    return
}

function eventHandlingFocusSubtaskInput() {
    const editSubtaskInputField = document.getElementById('flt-edit-subtasks')
    editSubtaskInputField.addEventListener('focus', () => {
        const par = editSubtaskIcon_Input_Parameter();
        editSubtaskButtonAndPlaceholderChange_at_func_start(par.editSubtaskIconBox, par.editSubtaskInput)
        eventHandlingButtonSubtaskClose()
    })
    return
}
//-------------------------------------------------------
//editCheckSubtaskButton()
function editCheckSubtaskButton() {
    const par = editSubtaskIcon_Input_Parameter();
    inputValueRuleOutEmptyInput()
    editSubtaskButtonAndPlaceholderChange_at_reset(par.editSubtaskIconBox, par.editSubtaskInput)
    editedSubtaskShow(subtask)
    showButtonAtHovern_Subtask()
    eventhandlingButtonEditSubtask()
    return
}

function inputValueRuleOutEmptyInput() {
    const inputValue = document.querySelector('#flt-edit-subtasks').value;
    if (!inputValue || inputValue === '') {
        return
    }
    subtask.push(inputValue)
    return
}

function editedSubtaskShow(subtasks) {
    const outputField = document.querySelector(".flt-add-tsk-output-subtask")
    outputField.innerHTML = ''
    for (let index = 0; index < subtasks.length; index++) {
        outputField.innerHTML += setSubtask(subtask, index)
    }
    showButtonAtHovern_Subtask()
    editSubtaskHoverButtonEdit()
    editSubtaskHoverButtonDelete()
    return
}

function showButtonAtHovern_Subtask() {
    const subtaskFunction = document.querySelectorAll('.added-subtask-list')
    subtaskFunction.forEach(list => {
        list.addEventListener('mouseenter', () => {
            list.querySelector('.added-subtask-function').classList.add('added-subtask-function-active');

        })
        list.addEventListener('mouseleave', () => {
            list.querySelector('.added-subtask-function').classList.remove('added-subtask-function-active');
        })
    })
    return
}
//------------------------------//

//editSubtaskHoverButtonDelete()
function editSubtaskHoverButtonDelete() {
    const deleteButton = document.querySelectorAll("#subtask-function-delete")
    forEachDeleteButton(deleteButton)
    return
}

function forEachDeleteButton(deleteButton) {
    deleteButton.forEach(button => {
        const parent = button.closest('.added-subtask-list')
        const dataList = parent.querySelector('li').dataset.subtask
        button.addEventListener('click', () => {
            const index = subtask.indexOf(dataList)
            subtask.splice(index, 1)
            editedSubtaskShow(subtask)
        })
    })
    return
}
//-----------------------------------//

//editSubtaskHoverButtonEdit()
function editSubtaskHoverButtonEdit() {
    document.querySelectorAll("#subtask-function-edit").forEach(editButton => {
        if (!editButton) {
            return
        }
        editButton_At_editTask_handling(editButton, subtask)
    })
    return
}

function editButton_At_editTask_handling(editButton, subtask) {
    const parent = editButton.closest('.added-subtask-list')
    editButton.addEventListener('click', () => {
        const listElement = parent.querySelector('li')
        const data = listElement.dataset.subtask
        const index = subtask.indexOf(data)
        listElement_At_editTask_handling(listElement, index, subtask)
    })
    return
}

function listElement_At_editTask_handling(listElement, index, subtask) {
    listElement.innerHTML = `<input type="text" name="list Value" class='edit-subtask-edit-task-input'>`
    const inputField = listElement.querySelector('input')
    inputField.value = subtask[index]
    listElement.querySelector('input').focus()
    listElement.querySelector('input').addEventListener('blur', () => {
        subtask.splice(index, 1, inputField.value)
        editedSubtaskShow(subtask)
    })
    return
}
//------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//