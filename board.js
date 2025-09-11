let assignTo = []
let editAssignTo = [];
let category = []
let priority = []
let subtask = []
let contacts;
let contactArray;
let tasks;
let taskArray;
let toDoArray;
let inProgressArray;
let awaitFeedbackArray;
let doneArray;

document.addEventListener('DOMContentLoaded', async () => {
    markSectionId('board')
    await refreshArray()
    init__dragAndDropEventHandling()
    taskSearchEventHandling()
    svgDragFalse()


    eventHandlingFltEditTaskPrio()
    eventHandlingEditAssignTo()
    eventhandlingButtonEditSubtask()
    eventHandlingFocusSubtaskInput()
})

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
