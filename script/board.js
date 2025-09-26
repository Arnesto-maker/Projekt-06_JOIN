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
    markSectionId('board')
    await refreshArray()
    init__dragAndDropEventHandling()
    taskSearchEventHandling()
    svgDragFalse()
    boardPlusButtonHoverHandling()
})


function boardPlusButtonHoverHandling() {
    const imgBoxs = document.querySelectorAll('.plus-button')
    imgBoxs.forEach(imgBox => {
        hoverListener(imgBox)
        uploadAtThisSection(imgBox)
    })
    return
}

function hoverListener(targetBox) {
    targetBox.addEventListener('mouseenter', () => {
        targetBox.setAttribute('src', "assets/icon-img/plus button-hover.svg")

    })
    targetBox.addEventListener('mouseleave', () => {
        targetBox.setAttribute('src', "assets/icon-img/plus button.svg")

    })
    return
}

function uploadAtThisSection(targetBox) {
    targetBox.addEventListener('click', async (event) => {
        const id = event.target.closest('.column').querySelector('.column-content').id
        await showFloatingAddTask()
        const uploadButton = document.querySelector('#create-add-task')
        uploadButton.setAttribute('onclick', `uploadTaskAtSpecificSection('${id}')`)
    })
    return
}

async function uploadTaskAtSpecificSection(columnId) {
    let data = setTaskObjectDefaultAtSections(columnId)
    if (!data) {
        return
    }
    resetForm()
    const name = await postData(path = '/task', data = data)
    await refreshArray()
    closeOverlay()
    return
}

