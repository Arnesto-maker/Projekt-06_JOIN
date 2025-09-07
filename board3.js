function priorityRemoveMarking() {
    document.querySelectorAll('.flt-prio').forEach(container => {
        container.classList.remove('priority-set')
    })
    document.querySelectorAll('path').forEach(path => {
        path.classList.remove('path-priority-set')
    })
    return
}

function getPriority(array, data) {
    const index = array.indexOf(data);
    if (index === 0) {
        array.splice(index, 1)
        priorityRemoveMarking()
        return array
    }
    array[0] = data;
    return array
}

function eventListenerSubtaskFocus() {
    document.getElementById('flt-subtask-add').addEventListener('focus', event => {
        const container = event.target.closest('.flt-add-tsk-title-subtask-box')
        eventFocus(container)
        return
    })
}

function eventListenerSubtaskBlur() {
    document.getElementById('flt-subtask-add').addEventListener('blur', event => {
        if (!document.getElementById('flt-subtask-add').value.trim()) {
            const container = event.target.closest('.flt-add-tsk-title-subtask-box')
            eventBlur(container)
            plusAddSubIconListener()
        }
        return
    })
}

function eventBlur(container) {
    container.querySelector('.flt-subtask-add').setAttribute('placeholder', 'Add new Subtask')
    container.querySelector('.subtask-icon-box').innerHTML = `<img src="assets/icon-img/add (1).svg" alt="" class="add-subtask-img" id= 'plus-add-subtask'>`;
    return
}

function eventFocus(container) {
    container.querySelector('.flt-subtask-add').setAttribute('placeholder', ' ')
    const iconBox = container.querySelector('.subtask-icon-box')
    iconBox.innerHTML = `<img src="assets/icon-img/close (1).svg" alt="" class="add-subtask-img" id='close-add-subtask'>
                         <img src="assets/icon-img/check (1).svg" alt="" class="add-subtask-img" id='check-add-subtask' onclick="pushSubtask('flt-subtask-add')">`;
    return
}

function pushSubtask(id) {
    let subtaskInput = document.getElementById(id).value
    let containerInput = document.getElementById('flt-subtask-add')
    const index = subtask.indexOf(subtaskInput)
    if (index === -1) {
        subtask.push(subtaskInput)
    } else {
        resetSubtaskInput(containerInput)
        return
    }
    resetSubtaskInput(containerInput)
    showSubtask();
    return
}

function resetSubtaskInput(containerInput) {
    const parentContainer = containerInput.closest('.flt-add-tsk-title-subtask-box')
    containerInput.value = ''
    eventBlur(parentContainer)
    plusAddSubIconListener()
    return
}

function plusAddSubIconListener() {
    document.getElementById('plus-add-subtask').addEventListener('click', event => {
        const container = event.target.closest('.flt-add-tsk-title-subtask-box')
        eventFocus(container)
        container.querySelector('.flt-subtask-add').focus()
        return
    })
}

function svgDragFalse() {
    document.querySelectorAll('img[src$=".svg"]').forEach(svg => {
        svg.setAttribute('draggable', 'false')
    })
}

function eventListenerSubtaskFunctions() {
    deleteSubtaskEventListener(subtask)
    editSubtaskEventListener(subtask)
    document.querySelectorAll('.added-subtask-list').forEach(container => {
        subtaskMouseEnterEvent(container)
        subtaskMouseLeaveEvent(container)
    })
}

function contactSearchFunction() {
    const assignInputField = document.getElementById('flt-title-assign')
    assignInputField.addEventListener('input', () => {
        searchKeyFilter(assignInputField, contactArray)
        return
    })

}

function init__dragAndDropEventHandling() {
    eventListenerDropHandling()
    eventListenerDragOverHandling()
    eventListenerDragCard()
    return
}

async function uploadTask() {
    let data = setTaskObjectDefault()
    if (!data) {
        console.log('please finish your validation');
        return
    }
    resetForm()
    await postData(path = '/task', data = data)
    console.log('data successfully uploaded');
    await refreshArray()
    closeOverlay()
    return
}

function priorityExisted(priorityParameter) {
    if (!priorityParameter) {
        return `unassigned`;
    }
    return priorityParameter
}

function contactAssigned(assignParameter) {
    if (!assignParameter || assignTo.length == 0) {
        return `unassigned`
    }
    return assignParameter
}

function descriptionNone(containerValue) {
    if (!containerValue || containerValue === '') {
        return `no description is set`
    }
    return containerValue
}

function resetForm() {
    assignTo = []
    category = []
    priority = []
    subtask = []
    getContactToAssign(contactArray)
    showAssignedTo()
    removeAllcategorymarks()
    priorityRemoveMarking()
    showSubtask()
    setcategoryInput('Select task Category')
    document.getElementById('flt-title-add').value = ''
    document.getElementById('flt-desc-text').value = ''
    document.getElementById('flt-due-date').value = ''
    return
}

function generateSubtask(array) {
    let subtaskArray;
    if (!array || array.length === 0) {
        subtaskArray = `no subtask selected`
    } else {
        subtaskArray = array.map(member => {
            return {
                text: member,
                completed: false
            }
        })
    }
    return subtaskArray
}

function getWholeBoard(toDoArray, inProgressArray, awaitFeedbackArray, doneArray) {
    getBoardSectionContent('toDo', toDoArray)
    getBoardSectionContent('inProgress', inProgressArray)
    getBoardSectionContent('awaitFeedback', awaitFeedbackArray)
    getBoardSectionContent('done', doneArray)
    return;
}

function getBoardSectionContent(targetId, array) {
    document.getElementById(targetId).innerHTML = '';
    if (!array || array.length === 0) {
        document.getElementById(targetId).innerHTML = setCardZero()
        return
    }
    for (let index = 0; index < array.length; index++) {
        document.getElementById(targetId).innerHTML += setCards(tasks, array[index].id)
        setBadgeforCards(tasks, array[index].id, "assignedToFor" + array[index].id, contacts)
    }
    init__dragAndDropEventHandling()
    return
}

function floatingAddTaskvalidation(title, dueDate, category) {
    const criterion1 = validateFloatingInput(title) // workflow 1
    const criterion2 = validateFloatingDueDate(dueDate) // workflow 2
    const criterion3 = validateFloatingCategory(category) // workflow 3
    criterion1EventListener()
    criterion2EventListener()
    criterion3EventListener()
    if (criterion1 && criterion2 && criterion3) {
        return true
    }
    return false
}

function taskSearchEventHandling() {
    const taskSearchInput = document.getElementById('search');
    taskSearchInput.addEventListener('input', () => {
        taskSearchKeyFilter(taskSearchInput, taskArray)
    })
}
