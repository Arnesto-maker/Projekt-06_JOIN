document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('summary').addEventListener('click', () => {
        window.location.href = 'summary.html'
    })

    document.getElementById('addTask').addEventListener('click', () => {
        window.location.href = 'add-task.html'
    })

    document.getElementById('board').addEventListener('click', () => {
        window.location.href = 'board.html'
    })

    document.getElementById('contacts').addEventListener('click', () => {
        window.location.href = 'contact.html'
    })
})

