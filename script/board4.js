async function refreshArray() {
    contacts = await getObject('/contacts')
    tasks = await getObject('/task')
    contactArray = arraySorting(filterPlaceHolderArray(objectToArray(contacts)))
    taskArray = filterPlaceHolderArray(objectToArray(tasks))
    const firstBoardArrays = init__boardArrayParameter(taskArray)
    getWholeBoard(firstBoardArrays.toDoArray, firstBoardArrays.inProgressArray, firstBoardArrays.awaitFeedbackArray, firstBoardArrays.doneArray)
    return
}

function taskSearchKeyFilter(taskSearchInput, taskArray) {
    const searchKey = taskSearchInput.value.toLowerCase()
    if (searchKey.length >= 2) {
        const searchedTask = searchFilterTask(taskArray, searchKey)
        const boardArrays = init__boardArrayParameter(searchedTask)
        getWholeBoard(boardArrays.toDoArray, boardArrays.inProgressArray, boardArrays.awaitFeedbackArray, boardArrays.doneArray)
    } else {
        searchedTask = taskArray
        const boardArrays = init__boardArrayParameter(searchedTask)
        getWholeBoard(boardArrays.toDoArray, boardArrays.inProgressArray, boardArrays.awaitFeedbackArray, boardArrays.doneArray)
    }
    return
}

function init__boardArrayParameter(searchedTask) {
    const arrayParameter = {
        toDoArray: arrayFilter__Sort(searchedTask, 'toDo'),
        inProgressArray: arrayFilter__Sort(searchedTask, 'inProgress'),
        awaitFeedbackArray: arrayFilter__Sort(searchedTask, 'awaitFeedback'),
        doneArray: arrayFilter__Sort(searchedTask, 'done'),
    }
    return arrayParameter;
}

function searchFilterTask(taskArray, searchKey) {
    let searchedTask = taskArray.filter(task => {
        let filterPoint;
        if (task.title.toLowerCase().includes(searchKey)) {
            filterPoint = task.title
        } else{
            filterPoint = task.priority
        }
        const filteredTask = filterPoint.toLowerCase().includes(searchKey)
        return filteredTask
    })
    return searchedTask
}

function arrayFilter__Sort(array, status) {
    const outputArray1 = array.filter(member => member.status === status);
    const outputArray2 = priorityOrder(outputArray1);
    return outputArray2
}

function priorityOrder(array) {
    const order = {
        'urgent': 1,
        'medium': 2,
        'low': 3,
        'unassigned': 4
    }
    const sortedArray = array.sort((a, b) => {
        const priorityA = order[a.priority]
        const priorityB = order[b.priority]
        return priorityA - priorityB
    })
    return sortedArray
}

async function showCardDetails(id) {
    document.querySelector('.overlay').setAttribute('style', 'display:flex')
    await switchOverlayContentWithSlide(targetID = 'overlay-content', setCardDetails(tasks, id))
    setBadgeforCardsDetailed(tasks, id, `overlay-assignedToFor${id}`, contacts)
    renderDetailedSubtask(`subtaskFor${id}`, id)
}

async function deleteTask(id) {
    await deleteData(path = `/task/${id}`)
    closeOverlay()
}

function renderDetailedSubtask(id, taskId) {
    document.getElementById(id).innerHTML = ''
    if (tasks[taskId].subtask === 'no subtask selected') {
        document.getElementById(id).innerHTML = 'no subtask selected'
        return
    }
    for (let index = 0; index < tasks[taskId].subtask.length; index++) {
        document.getElementById(id).innerHTML += setDetailedSubtask(tasks, taskId, index)
    }
    return
}

async function toggleCompleted(taskId, index) {
    let status = await getObject(path = `/task/${taskId}/subtask/${index}/completed`)
    status = !status;
    await putData(path = `/task/${taskId}/subtask/${index}/completed`, data = status)
    return
}

function eventHandlingFltEditTaskPrio() {
    document.querySelectorAll('.floating-priority').forEach(priorityButton => {
        priorityButton.addEventListener('click', (event) => {
            const data = event.target.closest('.floating-priority').dataset.priority
            editPriority[0] = (data)
            showPriority(editPriority)
        })
    })
    return
}

function showPriority(editPriority) {
    const containerParent = document.querySelectorAll('.floating-priority')
    let selectedContainer = document.querySelector(`div[data-priority = ${editPriority[0]}]`)
    if (!editPriority[0] || editPriority[0] === 'unassigned') {
        selectedContainer = document.querySelector(`div[data-priority = 'medium']`)
    }    
    floatingEditPriority(containerParent)
    floatingEditPriorityRemovePathMarking(containerParent)
    floatingEditPrioritySetNewMarking(selectedContainer)
    return
}

function floatingEditPriority(container) {
    container.forEach(child => {
        child.classList.remove('flt-edit-selected')
    })
    return
}

function floatingEditPriorityRemovePathMarking(containerParent) {
    containerParent.forEach(parent => {
        parent.querySelectorAll('path').forEach(path => {
            path.classList.remove('path-selected')
        });
    })
    return
}

function floatingEditPrioritySetNewMarking(selectedContainer) {
    selectedContainer.classList.add('flt-edit-selected')
    selectedContainer.querySelectorAll('path').forEach(path => {
        path.classList.add('path-selected')
    });
    return
}

function renderFltEditTask(array) {
    document.getElementById('assignPanel').innerHTML = ''
    for (let index = 0; index < array.length; index++) {
        let selectedTrue = editAssignTo.includes(array[index].id)
        document.getElementById('assignPanel').innerHTML += editSetContactAtAssignTo(contacts, array[index].id, selectedTrue)
    }
}

function eventHandlingEditAssignTo() {
    const parameter = fltAssignToEditParameter();
    parameter.fltAssignEdit.addEventListener('click', () => {
        toggleIconSwitch(parameter.fltAssignEditInputParent)
        togglePlaceHolderEditTask(parameter.fltAssignEditInput, parameter.fltAssignEditInputParent)
        editSearchEventHandling(parameter.fltAssignEditInput, contactArray)
        renderFltEditTask(contactArray)
        parameter.fltAssignEditPanel.classList.toggle('open')
    })
    return
}

function getEditAssignToScrollIntoView(container) {
    container.scrollIntoView({
        behavior: "smooth",
    })
    document.getElementById('flt-edit-assignTo').focus()
    return
}

function idNotIncluded(editAssignTo, id, contactArray) {
    editAssignTo.push(id)
    renderFltEditTask(contactArray)
    getEditAssignToScrollIntoView(document.getElementById(`${id}`))
    return
}

function idIncluded(editAssignTo, id, contactArray) {
    const index = editAssignTo.indexOf(id)
    editAssignTo.splice(index, 1)
    renderFltEditTask(contactArray)
    getEditAssignToScrollIntoView(document.getElementById(`${id}`))
    return
}

function getEditAssignto(id, event) {
    event.preventDefault()
    if (!editAssignTo.includes(id)) {
        idNotIncluded(editAssignTo, id, contactArray)
    } else {
        idIncluded(editAssignTo, id, contactArray)
    }
    showEditAssigned()
}

function showEditAssigned() {
    document.getElementById('flt-edit-task-assign-output-box').innerHTML = ''
    if (!editAssignTo) {
        editAssignTo = []
    }
    for (let index = 0; index < editAssignTo.length; index++) {
        document.getElementById('flt-edit-task-assign-output-box').innerHTML += setAssignedTo(contacts, editAssignTo[index])
        if (editAssignTo.length === 0) {
            document.getElementById('flt-edit-task-assign-output-box').innerHTML = ''
        }
    }
}

function togglePlaceHolderEditTask(editInput, editInputParent) {
    if (!placeholderExsist(editInput)) {
        editInput.setAttribute('placeholder', 'Select Contact to assign To')
        editInputParent.querySelector('img').setAttribute('src', "assets/icon-img/arrow_drop_down.svg")
        editInput.blur()
    } else {
        editInput.setAttribute('placeholder', '')
    }
    return
}

function toggleIconSwitch(editInputParent) {
    editInputParent.querySelector('img').setAttribute('src', "assets/icon-img/arrow_drop_down (1).svg")
    return
}

function fltAssignToEditParameter() {
    const parameter = {
        fltAssignEdit: document.querySelector('.flt-assignTo-edit-child-1'),
        fltAssignEditPanel: document.querySelector('.assign-panel'),
        fltAssignEditInput: document.querySelector('#flt-edit-assignTo'),
        fltAssignEditInputParent: document.querySelector('#flt-edit-assignTo').closest('.flt-assignTo-edit-child-1')
    }
    return parameter
}

function placeholderExsist(container) {
    let placeholderExist = container.placeholder;
    if (placeholderExist === '') {
        return false
    } else {
        return true
    }
}

function editSearchEventHandling(inputField, contactArray) {
    inputField.addEventListener('input', () => {
        searchEditContact(inputField, contactArray)
    })
    return
}

function searchEditContact(inputField, contactArray) {
    const searchKey = inputField.value.toLowerCase()
    const array = contactArray
    const arrayResult = filterEditContact(array, searchKey)
    if (searchKey.length >= 2 || searchKey.length == 0) {
        renderFltEditTask(arrayResult)
    }
    return
}

function filterEditContact(contactArray, searchKey) {
    let searchedContact = contactArray.filter(contact => {
        const filteredContact = contact.name.toLowerCase().includes(searchKey)
        return filteredContact
    })
    return searchedContact
}