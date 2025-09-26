document.addEventListener('DOMContentLoaded', async () => {
    markSectionId('summary')
    summary_init_hoverHandling()
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