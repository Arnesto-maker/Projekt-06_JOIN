let tasks;
let taskArray;
let toDoArray;
let inProgressArray;
let awaitFeedbackArray;
let doneArray;
let urgentArray;


document.addEventListener('DOMContentLoaded', async () => {
    markSectionId('summary')
    summary_init_hoverHandling()
    await getArrayInfoFromBoard()
    showAllBoardInformations()


})


function markSectionId(id) {
    document.getElementById(id).classList.add('active')
}


function summaryToDoHoverhandling() {
    const hoverBox = document.querySelector('.summary-to-do')
    hoverBox.addEventListener('mouseenter', () => {
        const img = hoverBox.querySelector('img')
        img.setAttribute('src', 'assets/icon-img/summary-pencil-hover.svg')
    })
    hoverBox.addEventListener('mouseleave', () => {
        const img = hoverBox.querySelector('img')
        img.setAttribute('src', 'assets/icon-img/summary-pencil.svg')
    })
    return
}

function summaryDoneHoverhandling() {
    const hoverBox = document.querySelector('.summary-done')
    hoverBox.addEventListener('mouseenter', () => {
        const img = hoverBox.querySelector('img')
        img.setAttribute('src', 'assets/icon-img/summary-check-hover.svg')
    })
    hoverBox.addEventListener('mouseleave', () => {
        const img = hoverBox.querySelector('img')
        img.setAttribute('src', 'assets/icon-img/summary-check.svg')
    })
    return
}

function summary_init_hoverHandling() {
    summaryToDoHoverhandling()
    summaryDoneHoverhandling()
    return
}

function showAllBoardInformations() {
    showToDoinBoard()
    showDoneinBoard()
    showTaskInBoard()
    showInProgressInBoard()
    showAwaitingFeedbackInBoard()
    showUrgentsTasksInBoard()
    showUpcomingDeadline()
    showUserGreeting()
    return
}

function showToDoinBoard() {
    const number = document.querySelector('#boardToDo')
    number.innerHTML = toDoArray.length
    return
}

function showDoneinBoard() {
    const number = document.querySelector('#boardDone')
    number.innerHTML = doneArray.length
    return
}

function showTaskInBoard() {
    const number = document.querySelector('#boardNumber')
    number.innerHTML = taskArray.length
    return
}

function showInProgressInBoard() {
    const number = document.querySelector('#boardProgress')
    number.innerHTML = inProgressArray.length
    return
}

function showAwaitingFeedbackInBoard() {
    const number = document.querySelector('#boardFeedBack')
    number.innerHTML = awaitFeedbackArray.length
    return
}

function showUrgentsTasksInBoard() {
    const parent = document.querySelector('.summary-urgent-and-upcoming-deadline')
    const number = parent.querySelector('.number')
    number.innerHTML = urgentArray.length
    return
}

function showUpcomingDeadline() {
    const parent = document.querySelector('.deadlineDate-and-label')
    parent.querySelector('.type-date').innerHTML = convertFunctionDuedate()
    return
}

function showUserGreeting() {
    const box = document.querySelector('.user-log-in-time');
    box.innerHTML = getActualTime()
    return
}


async function getArrayInfoFromBoard() {
    contacts = await getObject('/contacts')
    tasks = await getObject('/task')
    contactArray = arraySorting(filterPlaceHolderArray(objectToArray(contacts)))
    taskArray = filterPlaceHolderArray(objectToArray(tasks))
    searchedTask = taskArray
    toDoArray = arrayFilter__Sort(searchedTask, 'toDo')
    inProgressArray = arrayFilter__Sort(searchedTask, 'inProgress')
    awaitFeedbackArray = arrayFilter__Sort(searchedTask, 'awaitFeedback')
    doneArray = arrayFilter__Sort(searchedTask, 'done')
    urgentArray = arrayFilter__Sort_priority(searchedTask, 'urgent')
    return
}

function filterDoneStatusAtUrgentTasks(urgentTasks) {
    const output = urgentTasks.filter(member => {
        if (member.status === 'done') {
            return false
        } else {
            return true
        }
    })
    return output
}

function arraySorting(array) {
    const sortedArray = array
    sortedArray.sort((memberA, memberB) => {
        return memberA.name.localeCompare(memberB.name)
    })
    return sortedArray
}

function arraySorting_dueDate(array) {
    const sortedArray = filterUnassignedDueDate(array)
    sortedArray.forEach(member => {
        member['dueDate'] = convertDateStrings(member['dueDate'])
    });
    sortedArray.sort((memberA, memberB) => {
        return memberA.dueDate.localeCompare(memberB.dueDate)
    })
    return sortedArray
}

function filterUnassignedDueDate(array) {
    const filteredArray = array.filter((member) => {
        if (member.dueDate === "") {
            return false
        } else {
            return true
        }
    })
    return filteredArray
}

function showSortedArrayDueDate() {
    let sortedArray = arraySorting_dueDate(filterDoneStatusAtUrgentTasks(urgentArray));
    let output;
    if (!sortedArray || sortedArray.length === 0) {
        output = false
    } else {
        output = sortedArray[0].dueDate
    }
    return output
}

function arrayCovertDateStrings(array) {
    let output = array.forEach(member => {
        member['dueDate'] = convertDateStrings(member['dueDate'])
    });
    return output
}

function convertDateStrings(strings) {
    const input = strings
    return input.split('/').reverse().join('-')
}


function convertFunctionDuedate() {
    let output;
    const dueDateType = showSortedArrayDueDate()  
    if (!dueDateType) {
        output = `no upcoming deadline`
    } else {
        const input = showSortedArrayDueDate().split('-').reverse()
        output = `${convertNumberToMonth(input[1])} ${input[0]}, ${input[2]}`
    }
    return output
}

function convertNumberToMonth(number) {
    const month = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'Mai',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }
    return month[number]
}

function getActualTime() {
    let greeting
    const time = new Date().getHours()
    if (time >= 1 && time <= 11) {
        greeting = 'Good Morning'
    } else if (time >= 12 && time <= 17) {
        greeting = 'Good day'
    } else {
        greeting = 'Good night'
    }
    return `${greeting} !`
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

function arrayFilter__Sort(array, status) {
    const outputArray1 = array.filter(member => member.status === status);
    const outputArray2 = priorityOrder(outputArray1);
    return outputArray2
}

function arrayFilter__Sort_priority(array, priority) {
    const outputArray1 = array.filter(member => member.priority === priority);
    return outputArray1
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