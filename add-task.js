let assignTo = []
let editAssignTo = [];
let editPriority = []
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
    markSectionId('addTask')
    await refreshArrayAddTask()
    svgDragFalse()
    floatingAddTask__init(contactArray)
})

function markSectionId(id) {
    document.getElementById(id).classList.add('active')
}

async function refreshArrayAddTask() {
    contacts = await getObject('/contacts')
    tasks = await getObject('/task')
    contactArray = arraySorting(filterPlaceHolderArray(objectToArray(contacts)))
    taskArray = filterPlaceHolderArray(objectToArray(tasks))
    return
}

async function uploadTaskAddTaskSection() {
    let data = setTaskObjectDefault()
    if (!data) {
        return
    }
    resetForm()
    await postData(path = '/task', data = data)
    await refreshArrayAddTask()
    return 
}

function redirectToBoard() {
    window.location.href = 'board.html'
    return
}