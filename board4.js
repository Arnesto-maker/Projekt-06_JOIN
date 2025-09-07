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
        const filteredTask = task.title.toLowerCase().includes(searchKey)
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

function showCardDetails(id) {
    document.querySelector('.overlay').setAttribute('style', 'display:flex')
    document.getElementById('overlay-content').innerHTML = setCardDetails(tasks, id)
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