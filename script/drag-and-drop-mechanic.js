function eventListenerDropHandling() {
    document.querySelectorAll('.column-content').forEach(container => {
        container.addEventListener('drop', dropHandler)
    })
    return
}

function eventListenerDragOverHandling() {
    document.querySelectorAll('.column-content').forEach(container => {
        container.addEventListener('dragover', dragoverHandler)
    })
    return
}

function eventListenerDragCard() {
    document.querySelectorAll('.card').forEach(card => {
        card.setAttribute('draggable', "true")
        card.addEventListener('dragstart', dragstartHandler)
    })
    return
}

function dragstartHandler(ev) {
    const taskStartParameter = {
        taskId: ev.target.id,
        statusBeforeDrag: tasks[ev.target.id].status
    }
    ev.dataTransfer.setData("app/json", JSON.stringify(taskStartParameter))
    return
}

function dragoverHandler(ev) {
    ev.preventDefault();    
}

async function dropHandler(ev) {
    ev.preventDefault();
    const dropParameter = dropHandler__init(ev)
    await putData(path = `/task/${dropParameter.taskStartParameter.taskId}/status`, data = `${dropParameter.containerId}`)
    await refreshArray()
    return
}

function cardExisted(cardId, container) {
    const existingContainer = container.querySelector(cardId)
    if (existingContainer) {
        return true
    } else {
        return false
    }
}

function dropHandler__init(ev) {
    const initParameter = {
        taskStartParameter: JSON.parse(ev.dataTransfer.getData("app/json")),
        container: ev.target.closest('.column-content'),
        containerId: ev.target.closest('.column-content').id,
        card: document.getElementById(JSON.parse(ev.dataTransfer.getData("app/json")).taskId)
    }
    return initParameter
}

