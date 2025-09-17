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
})


