function markSectionId(id) {
    document.getElementById(id).classList.add('active')
}

function showAssignTo() {
    const container = document.querySelector('.assign-field');
    container.classList.toggle('open');
}

function showContactToAssign() {
    const container = document.querySelector('.assign-panel');
    container.classList.toggle('open');
}

function showAllCategories() {
    const container = document.querySelector('.category-panel')
    container.classList.toggle('open-category')
}

async function closeOverlay() {
    document.querySelector('.overlay').setAttribute('style', 'display:none')
    await refreshArray()
}

function showFloatingAddTask() {
    document.querySelector('.overlay').setAttribute('style', 'display:flex')
    document.getElementById('overlay-content').innerHTML = setFloatingAddTask()
    floatingAddTask__init(contactArray)
    return
}

function floatingAddTask__init(contactArray) {
    getContactToAssign(contactArray)
    eventListenerAssignPanel()
    eventListenerCategoryPanel()
    eventListenerPriority()
    eventListenerSubtaskFocus()
    eventListenerSubtaskBlur()
    plusAddSubIconListener()
    eventListenerSubtaskFunctions()
    setMinimumDate()
    contactSearchFunction()
    return
}

function assignInputActive() {
    document.getElementById('flt-title-assign').setAttribute('placeholder', '')
    document.getElementById('arrow-icon-box').innerHTML = `<img src="assets/icon-img/arrow_drop_down (1).svg" alt="">`
    document.querySelector('.flt-add-tsk-assign-input-box').setAttribute('onclick', 'assignInputDeactive()')
    showContactToAssign()
    return
}

function categoryInputActive() {
    document.getElementById('arrow-icon-box-category').innerHTML = `<img src="assets/icon-img/arrow_drop_down (1).svg" alt="">`
    document.querySelector('.flt-add-tsk-category-input-box').setAttribute('onclick', 'categoryInputDeactive()')
    showAllCategories()
    return
}

function categoryInputDeactive() {
    document.getElementById('arrow-icon-box-category').innerHTML = `<img src="assets/icon-img/arrow_drop_down.svg" alt="">`
    document.querySelector('.flt-add-tsk-category-input-box').setAttribute('onclick', 'categoryInputActive()')
    showAllCategories()
    return
}


function assignInputDeactive() {
    document.getElementById('flt-title-assign').setAttribute('placeholder', 'Select contacts to assign')
    document.getElementById('arrow-icon-box').innerHTML = `<img src="assets/icon-img/arrow_drop_down.svg" alt="">`
    document.querySelector('.flt-add-tsk-assign-input-box').setAttribute('onclick', 'assignInputActive()')
    document.getElementById('flt-title-assign').blur()
    showContactToAssign()
    return
}

function eventListenerAssignPanel() {
    document.getElementById('assignPanel').addEventListener('click', (event) => {
        event.preventDefault()
        const selectedOption = event.target.closest('.option')
        if (!selectedOption) {
            return
        }
        checkboxChecked(selectedOption)
        selectedOption.classList.toggle('selected')
    })
    return
}

function checkboxChecked(selectedOption) {
    const checkbox = selectedOption.querySelector('input[type="checkbox"]')
    checkbox.checked = !checkbox.checked
    return
}

function eventListenerCategoryPanel() {
    document.getElementById('categoryPanel').addEventListener('click', (event) => {
        const selectedBox = event.target.closest('.category')
        if (!selectedBox) {
            return
        }
        categoryClassToggle(selectedBox)
        let placeholder = getCategory(category, (selectedBox.dataset.category), selectedBox);
        if (placeholder[0]) {
            setcategoryInput(placeholder[0])
        } else {
            setcategoryInput('Select task Category')
        }
        categoryInputDeactive()
        return
    })
}

function setcategoryInput(placeholder) {
    document.querySelector('.category-input-field').innerHTML = placeholder
}

function getCategory(array, data, selectedBox) {
    const dataSet = data;
    const index = array.indexOf(dataSet);
    if (index === 0) {
        array.splice(index, 1)
        selectedBox.classList.remove('selected')
        return array
    }
    array[0] = data
    return array
}

function getAssignto(id) {
    let checkedBox = document.getElementById(id).value
    const index = assignTo.indexOf(checkedBox)
    if (index === -1) {
        assignTo.push(checkedBox)
    } else {
        assignTo.splice(index, 1)
    }
    showAssignedTo()
    return
}

function removeAllcategorymarks() {
    document.querySelectorAll('.category').forEach(container => {
        container.classList.remove('selected')
    })
}

function categoryClassToggle(selectedBox) {
    removeAllcategorymarks();
    selectedBox.classList.add('selected')
}

function eventListenerPriority() {
    document.getElementById('flt-add-tsk-priority-input-box').addEventListener('click', event => {
        const prioritySelected = event.target.closest('.flt-prio')
        if (!prioritySelected) {
            return
        }
        priorityAddMarking(prioritySelected)
        getPriority(priority, (prioritySelected.dataset.priority));
        return priority
    })
}

function priorityAddMarking(prioritySelected) {
    priorityRemoveMarking()
    prioritySelected.classList.add('priority-set')
    prioritySelected.querySelectorAll('path').forEach(path => {
        path.classList.add('path-priority-set')
    })
    return
}

function setMinimumDate() {
    const dateInput = document.getElementById('flt-due-date')
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    dateInput.min = `${year}-${month}-${day}`;
    return
}

function objectToArray(targetObject) {
    const object = Object.entries(targetObject)
    const arrayObject = object.map((member) => {
        return {
            id: member[0],
            ...member[1]
        }
    })
    return arrayObject;
}

function arraySorting(array) {
    const sortedArray = array
    sortedArray.sort((memberA, memberB) => {
        return memberA.name.localeCompare(memberB.name)
    })
    return sortedArray
}

function filterPlaceHolderArray(array) {
    const filteredArray = array.filter((member) => {
        if (member.id === "' '") {
            return false
        } else {
            return true
        }
    })
    return filteredArray
}

function getContactToAssign(contactArray) {
    document.getElementById('assignPanel').innerHTML = '';
    for (let index = 0; index < contactArray.length; index++) {
        const selectedTrue = assignTo.includes(contactArray[index].id)
        document.getElementById('assignPanel').innerHTML += setContactAtAssignTo(contacts, contactArray[index].id, selectedTrue)
    }
}

function showAssignedTo() {
    document.getElementById('flt-add-task-assign-output-box').innerHTML = '';
    for (let index = 0; index < assignTo.length; index++) {
        document.getElementById('flt-add-task-assign-output-box').innerHTML += setAssignedTo(contacts, assignTo[index])
    }
}

function subtaskMouseEnterEvent(container) {
    container.addEventListener('mouseenter', (event) => {
        const container = event.target.closest('.added-subtask-list')
        container.querySelector('.added-subtask-function').classList.add('added-subtask-function-active')
    })
    return
}

function subtaskMouseLeaveEvent(container) {
    container.addEventListener('mouseleave', (event) => {
        const container = event.target.closest('.added-subtask-list')
        container.querySelector('.added-subtask-function').classList.remove('added-subtask-function-active')
    })
}

function deleteSubtaskEventListener(array) {
    document.querySelectorAll('.added-subtask-list').forEach(node => {
        node.querySelector('#subtask-function-delete').addEventListener('click', () => {
            const dataSubtask = node.querySelector('li').dataset.subtask;
            const index = array.indexOf(dataSubtask)
            array.splice(index, 1)
            showSubtask();
            return
        })
    })
}

function editSubtaskEventListener(array) {
    document.querySelectorAll('.added-subtask-list').forEach(node => {
        node.querySelector('#subtask-function-edit').addEventListener('click', (event) => {
            event.stopPropagation()
            const targetSubtask = node.querySelector('li')
            subFucntion1FromEditSubtask(targetSubtask)
            subFunction2FromEditSubtask(targetSubtask, array)
            return
        })
    })
}

function subFucntion1FromEditSubtask(targetSubtask) {
    targetSubtask.innerHTML = `<input type="text" class = 'edit-subtask-input' placeholder = 'enter your new subtask'>`;
    targetSubtask.querySelector('input').focus()
    targetSubtask.querySelector('input').value = targetSubtask.dataset.subtask
}

function subFunction2FromEditSubtask(targetSubtask, array) {
    targetSubtask.querySelector('input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            saveAndExit(targetSubtask, array)
        }
    })
    targetSubtask.querySelector('input').addEventListener('blur', () => {
        showSubtask()
    })
}

function saveAndExit(targetSubtask, array) {
    subFunction3(targetSubtask, array)
    showSubtask()
}

function subFunction3(targetSubtask, array) {
    const inputValue = targetSubtask.querySelector('input').value.trim()
    if (inputValue === '') {
        return
    }
    targetSubtask.setAttribute('data-subtask', inputValue)
    subFunction4(targetSubtask, array)
    return
}

function subFunction4(targetSubtask, array) {
    const index = array.indexOf(targetSubtask.dataset.subtask)
    array.splice(index, 1, targetSubtask.dataset.subtask)
    targetSubtask.innerHTML = targetSubtask.dataset.subtask
    return
}

function searchKeyFilter(assignInputField, contactArray) {
    const searchKey = assignInputField.value.toLowerCase()
    if (searchKey.length >= 2) {
        let searchedContact = contactArray.filter(contact => {
            const filteredContact = contact.name.toLowerCase().includes(searchKey)
            return filteredContact
        })
        getContactToAssign(searchedContact)
    } else {
        getContactToAssign(contactArray)
    }
}

//workflow 1
function validateFloatingInput(title) {
    if (!title || title === '') {
        document.getElementById('flt-title-add').closest('.flt-add-tsk-title-input-box').setAttribute('style', 'border: 2px solid red')
        document.getElementById('flt-title-add').setAttribute('placeholder', 'please write your task title ')
        return false
    }
    return true
}

//workflow 2 
function validateFloatingDueDate(dueDate) {
    if (!dueDate || dueDate === '') {
        document.getElementById('flt-due-date').closest('.flt-due-date-ad-tsk-input-box').setAttribute('style', 'border: 2px solid red')
        document.getElementById('flt-due-date').setAttribute('type', 'text')
        document.getElementById('flt-due-date').setAttribute('placeholder', 'please set your date ')
        return false
    }
    return true
}
// workflow 3
function validateFloatingCategory(category) {
    if (!category || category === 'float-add-task-category') {
        document.querySelector('.float-add-task-category').setAttribute('style', 'border: 2px solid red')
        document.querySelector('.category-input-field').innerHTML = `place select your Category`;
        return false
    }
    return true
}

// workflow 1 addeventListener;
function criterion1EventListener() {
    document.getElementById('flt-title-add').addEventListener('focus', (event) => {
        event.target.closest('#flt-title-add').setAttribute('placeholder', 'Enter a title')
        event.target.closest('.flt-add-tsk-title-input-box').removeAttribute('style')
    })
    return
}

// workflow 2 addEventListener
function criterion2EventListener() {
    document.getElementById('flt-due-date').addEventListener('focus', (event) => {
        event.target.closest('#flt-due-date').removeAttribute('placeholder', 'Enter a title')
        event.target.closest('#flt-due-date').setAttribute('type', 'date')
        event.target.closest('.flt-due-date-ad-tsk-input-box').removeAttribute('style')
    })
    return
}

// workflow 3 addEventListener
function criterion3EventListener() {
    document.querySelector('.float-add-task-category').addEventListener('click', () => {
        document.querySelector('.float-add-task-category').removeAttribute('style')
    })
    return
}
