function setContactAtAssignTo(contacts, id, selectedTrue) {
    let template;
    if (selectedTrue) {
        template = `  <label class="option selected" onclick="getAssignto('${id}')">
                         <div class="flt-profile">
                         <div class="flt-badge" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]}, ${contacts[id].badgeColor[2]}, 1) ;">${contacts[id].firstLetter}${contacts[id].secondFirstLetter}</div>
                         <div class="flt-contaact-name">${contacts[id].name}</div>
                         </div>
                         <input type="checkbox" checked name="${contacts[id].name}" value="${id}" id="${id}">
                     </label> `;
    } else {
        template = `  <label class="option" onclick="getAssignto('${id}')">
                         <div class="flt-profile">
                         <div class="flt-badge" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]}, ${contacts[id].badgeColor[2]}, 1) ;">${contacts[id].firstLetter}${contacts[id].secondFirstLetter}</div>
                         <div class="flt-contaact-name">${contacts[id].name}</div>
                         </div>
                         <input type="checkbox" name="${contacts[id].name}" value="${id}" id="${id}">
                     </label> `;
    }
    return template
}

function editSetContactAtAssignTo(contacts, id, selectedTrue) {
    let template;
    if (selectedTrue) {
        template = `  <label class="option selected" onclick="getEditAssignto('${id}', event)">
                         <div class="flt-profile">
                         <div class="flt-badge" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]}, ${contacts[id].badgeColor[2]}, 1) ;">${contacts[id].firstLetter}${contacts[id].secondFirstLetter}</div>
                         <div class="flt-contaact-name">${contacts[id].name}</div>
                         </div>
                         <input type="checkbox" checked name="${contacts[id].name}" value="${id}" id="${id}">
                     </label> `;
    } else {
        template = `  <label class="option" onclick="getEditAssignto('${id}', event)">
                         <div class="flt-profile">
                         <div class="flt-badge" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]}, ${contacts[id].badgeColor[2]}, 1) ;">${contacts[id].firstLetter}${contacts[id].secondFirstLetter}</div>
                         <div class="flt-contaact-name">${contacts[id].name}</div>
                         </div>
                         <input type="checkbox" name="${contacts[id].name}" value="${id}" id="${id}">
                     </label> `;
    }
    return template
}

function setAssignedTo(contacts, id) {
    let template;
    if (!contacts[id] || contacts[id] === undefined) {
        template = ''
        return template
    }
    template = `<div class="flt-badge" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]}, ${contacts[id].badgeColor[2]}, 1) ;">${contacts[id].firstLetter}${contacts[id].secondFirstLetter}</div>`;
    return template
}

function setSubtask(array, index) {
    let template;
    template = `<div class="added-subtask-list">
                                        <li class="added-subtask" data-subtask = '${array[index]}'>${array[index]}</li>
                                        <div class="added-subtask-function">
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" id="subtask-function-edit">
                                                <path
                                                    d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z"
                                                    fill="#2A3647" />
                                            </svg>
                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" id="subtask-function-delete">
                                                <path
                                                    d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3C0.716667 3 0.479167 2.90417 0.2875 2.7125C0.0958333 2.52083 0 2.28333 0 2C0 1.71667 0.0958333 1.47917 0.2875 1.2875C0.479167 1.09583 0.716667 1 1 1H5C5 0.716667 5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H10C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1H15C15.2833 1 15.5208 1.09583 15.7125 1.2875C15.9042 1.47917 16 1.71667 16 2C16 2.28333 15.9042 2.52083 15.7125 2.7125C15.5208 2.90417 15.2833 3 15 3V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM3 3V16H13V3H3ZM5 13C5 13.2833 5.09583 13.5208 5.2875 13.7125C5.47917 13.9042 5.71667 14 6 14C6.28333 14 6.52083 13.9042 6.7125 13.7125C6.90417 13.5208 7 13.2833 7 13V6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6V13ZM9 13C9 13.2833 9.09583 13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 11 13V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V13Z"
                                                    fill="#2A3647" />
                                            </svg>
                                        </div>
                </div>`;
    return template
}

function showSubtask() {
    document.getElementById('flt-add-tsk-output-subtask').innerHTML = ''
    for (let index = 0; index < subtask.length; index++) {
        document.getElementById('flt-add-tsk-output-subtask').innerHTML += setSubtask(subtask, index)
    }
    eventListenerSubtaskFunctions()
}

function setCardZero() {
    let template;
    template = `<div class="card-zero">No tasks in this section</div>`;
    return template
}

function setTaskObjectDefault() {
    let taskObject;
    taskObject = {
        title: document.getElementById('flt-title-add').value, // validation point 01
        description: descriptionNone(document.getElementById('flt-desc-text').value),
        dueDate: document.getElementById('flt-due-date').value.split('-').reverse().join('/'), // validation point 02
        priority: priorityExisted(priority[0]),
        assignedTo: contactAssigned(assignTo),
        category: category[0], // validation point 03
        subtask: generateSubtask(subtask),
        status: 'toDo'
    }
    if (!floatingAddTaskvalidation(taskObject.title, taskObject.dueDate, taskObject.category)) {
        return false
    }
    return taskObject
}

function setTaskObjectDefaultAtSections(columnId) {
    let taskObject;
    taskObject = {
        title: document.getElementById('flt-title-add').value, // validation point 01
        description: descriptionNone(document.getElementById('flt-desc-text').value),
        dueDate: document.getElementById('flt-due-date').value.split('-').reverse().join('/'), // validation point 02
        priority: priorityExisted(priority[0]),
        assignedTo: contactAssigned(assignTo),
        category: category[0], // validation point 03
        subtask: generateSubtask(subtask),
        status: columnId
    }
    if (!floatingAddTaskvalidation(taskObject.title, taskObject.dueDate, taskObject.category)) {
        return false
    }
    return taskObject
}




function setFloatingAddTask() {
    let template;
    template = `<div class="floating-add-task">
                    <div class="floating-add-task-header">
                        <div class="floating-add-task-header-content-box">
                            <div class="floating-add-task-header-text">
                                <div class="float-head-teks">Add Task</div>
                            </div>
                            <div class="floating-add-task-header-icon">
                                <div class="float-head-close" onclick="closeOverlay()">
                                    <img src="assets/icon-img/Close.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="floating-add-task-body">
                        <div class="floating-add-task-body-first-half">
                            <div class="float-add-task-title">
                                <div class="flt-add-task-title-text">Title</div>
                                <div class="flt-add-tsk-title-input-box">
                                    <input type="text" placeholder="Enter a title" id="flt-title-add"
                                        class="flt-title-add">
                                </div>
                            </div>
                            <div class="float-add-task-description">
                                <div class="flt-add-task-title-text">Description</div>
                                <div class="flt-ad-tsk-text-box">
                                    <textarea name="description" id="flt-desc-text" class="flt-desc-text"
                                        placeholder="Enter a description"></textarea>
                                </div>
                            </div>
                            <div class="float-add-task-due-date">
                                <div class="flt-add-task-title-text">Due date</div>
                                <div class="flt-due-date-ad-tsk-input-box">
                                    <input type="date" class="flt-due-date" id="flt-due-date">
                                </div>
                            </div>
                        </div>
                        <div class="float-body-separator"></div>
                        <div class="floating-add-task-body-second-half">
                            <div class="float-add-task-priority">
                                <div class="flt-add-task-title-text">Priority</div>
                                <div class="flt-add-tsk-priority-input-box" id="flt-add-tsk-priority-input-box">
                                    <div id="flt-prio-urgent" data-priority="urgent" class="flt-prio">
                                        <div class="flt-prio-text">Urgent</div>
                                        <div class="flt-prio-icon">
                                            <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="urgent-icon">
                                                <path
                                                    d="M9.00026 4.75488C9.19969 4.75455 9.39397 4.81645 9.55451 4.93149L17.123 10.3655C17.2215 10.4362 17.3046 10.5251 17.3678 10.6272C17.4309 10.7292 17.4727 10.8423 17.4909 10.96C17.5276 11.1978 17.4656 11.44 17.3186 11.6334C17.1716 11.8267 16.9516 11.9554 16.7071 11.9911C16.4625 12.0267 16.2134 11.9665 16.0145 11.8236L9.00026 6.79262L1.98602 11.8236C1.88754 11.8943 1.7757 11.9455 1.65687 11.9743C1.53803 12.003 1.41455 12.0087 1.29345 11.9911C1.17235 11.9734 1.05602 11.9327 0.951088 11.8714C0.846159 11.81 0.754691 11.7291 0.681906 11.6334C0.609122 11.5376 0.556445 11.4289 0.526885 11.3134C0.497325 11.1978 0.491459 11.0778 0.509623 10.96C0.527789 10.8423 0.569626 10.7292 0.632752 10.6272C0.695876 10.5251 0.779049 10.4362 0.877524 10.3654L8.44602 4.93149C8.60656 4.81645 8.80083 4.75455 9.00026 4.75488Z"
                                                    fill="#FF3D00" />
                                                <path
                                                    d="M9.00002 8.0474e-07C9.19945 -0.000333441 9.39372 0.0615695 9.55427 0.176604L17.1228 5.61057C17.3216 5.75348 17.454 5.96736 17.4907 6.20514C17.5273 6.44292 17.4654 6.68513 17.3184 6.87849C17.1714 7.07185 16.9514 7.20051 16.7068 7.23618C16.4623 7.27185 16.2131 7.2116 16.0143 7.06868L9.00002 2.03774L1.98577 7.06868C1.78689 7.2116 1.53777 7.27185 1.2932 7.23618C1.04863 7.20051 0.828657 7.07185 0.681662 6.87849C0.534667 6.68513 0.472695 6.44292 0.509379 6.20514C0.546065 5.96736 0.678402 5.75348 0.87728 5.61057L8.44577 0.176604C8.60631 0.0615695 8.80059 -0.000333475 9.00002 8.0474e-07Z"
                                                    fill="#FF3D00" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="flt-prio-medium" data-priority="medium" class="flt-prio">
                                        <div class="flt-prio-text">Medium</div>
                                        <div class="flt-prio-icon">
                                            <svg viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="medium-icon">
                                                <path
                                                    d="M16.5685 7.1667L1.43151 7.1667C1.18446 7.1667 0.947523 7.06785 0.772832 6.89189C0.598141 6.71593 0.5 6.47728 0.5 6.22843C0.5 5.97959 0.598141 5.74093 0.772832 5.56497C0.947523 5.38901 1.18446 5.29016 1.43151 5.29016L16.5685 5.29016C16.8155 5.29016 17.0525 5.38901 17.2272 5.56497C17.4019 5.74093 17.5 5.97959 17.5 6.22843C17.5 6.47728 17.4019 6.71593 17.2272 6.89189C17.0525 7.06785 16.8155 7.1667 16.5685 7.1667Z"
                                                    fill="#FFA800" />
                                                <path
                                                    d="M16.5685 2.70992L1.43151 2.70992C1.18446 2.70992 0.947523 2.61106 0.772832 2.4351C0.598141 2.25914 0.5 2.02049 0.5 1.77165C0.5 1.5228 0.598141 1.28415 0.772832 1.10819C0.947523 0.932227 1.18446 0.833374 1.43151 0.833374L16.5685 0.833374C16.8155 0.833374 17.0525 0.932227 17.2272 1.10819C17.4019 1.28415 17.5 1.5228 17.5 1.77165C17.5 2.02049 17.4019 2.25914 17.2272 2.4351C17.0525 2.61106 16.8155 2.70992 16.5685 2.70992Z"
                                                    fill="#FFA800" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="flt-prio-low" data-priority="low" class="flt-prio">
                                        <div class="flt-prio-text">Low</div>
                                        <div class="flt-prio-icon">
                                            <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="low-icon">
                                                <path
                                                    d="M8.99974 7.24512C8.80031 7.24545 8.60603 7.18355 8.44549 7.06851L0.876998 1.63455C0.778524 1.56378 0.695351 1.47485 0.632227 1.37284C0.569103 1.27082 0.527264 1.15771 0.5091 1.03998C0.472414 0.802195 0.534386 0.559983 0.681381 0.366625C0.828377 0.173268 1.04835 0.0446026 1.29292 0.00893536C1.53749 -0.0267319 1.78661 0.0335201 1.98549 0.176437L8.99974 5.20738L16.014 0.176438C16.1125 0.105672 16.2243 0.0544579 16.3431 0.0257179C16.462 -0.00302201 16.5855 -0.00872444 16.7066 0.00893622C16.8277 0.0265969 16.944 0.0672747 17.0489 0.128647C17.1538 0.19002 17.2453 0.270885 17.3181 0.366626C17.3909 0.462367 17.4436 0.571109 17.4731 0.686643C17.5027 0.802177 17.5085 0.92224 17.4904 1.03998C17.4722 1.15772 17.4304 1.27082 17.3672 1.37284C17.3041 1.47486 17.221 1.56379 17.1225 1.63455L9.55398 7.06851C9.39344 7.18355 9.19917 7.24545 8.99974 7.24512Z"
                                                    fill="#7AE229" />
                                                <path
                                                    d="M8.99998 12C8.80055 12.0003 8.60628 11.9384 8.44574 11.8234L0.877242 6.38943C0.678366 6.24652 0.546029 6.03264 0.509344 5.79486C0.472658 5.55708 0.53463 5.31487 0.681625 5.12151C0.828621 4.92815 1.0486 4.79949 1.29317 4.76382C1.53773 4.72815 1.78686 4.7884 1.98574 4.93132L8.99998 9.96226L16.0142 4.93132C16.2131 4.7884 16.4622 4.72815 16.7068 4.76382C16.9514 4.79949 17.1713 4.92815 17.3183 5.12151C17.4653 5.31487 17.5273 5.55708 17.4906 5.79486C17.4539 6.03264 17.3216 6.24652 17.1227 6.38943L9.55423 11.8234C9.39369 11.9384 9.19941 12.0003 8.99998 12Z"
                                                    fill="#7AE229" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="float-add-task-assign">
                                <div class="flt-add-task-title-text">Assigned to</div>
                                <div class="flt-add-task-assign-content">
                                    <div class="flt-add-tsk-assign-input-box" onclick="assignInputActive()">
                                        <input type="text" placeholder="Select contacts to assign" id="flt-title-assign"
                                            class="flt-title-assign">
                                        <div class="arrow-icon-box" id="arrow-icon-box">
                                            <img src="assets/icon-img/arrow_drop_down.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="assign-panel" id='assignPanel'>

                                    </div>
                                    <div class="flt-add-task-assign-output-box" id="flt-add-task-assign-output-box">

                                    </div>
                                </div>
                            </div>
                            <div class="float-add-task-category">
                                <div class="flt-add-task-title-text">Category</div>
                                <div class="flt-add-tsk-category-input-box" onclick="categoryInputActive()"
                                    id="category">
                                    <div class="category-input-field">Select task category</div>
                                    <div class="arrow-icon-box" id="arrow-icon-box-category">
                                        <img src="assets/icon-img/arrow_drop_down.svg" alt="">
                                    </div>
                                </div>
                                <div class="category-panel" id='categoryPanel'>
                                    <div class="category" data-category="Technical task">
                                        <div class="flt-profile">
                                            Technical Task
                                        </div>
                                    </div>
                                    <div class="category" data-category="User Story">
                                        <div class="flt-profile">
                                            User Story
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="float-add-task-subtask">
                                <div class="flt-add-task-title-text">Subtasks</div>
                                <div class="flt-add-tsk-title-subtask-box">
                                    <input type="text" placeholder="Add new Subtasks" id="flt-subtask-add"
                                        class="flt-subtask-add">
                                    <div class="subtask-icon-box" id="subtask-icon-box">
                                        <img src="assets/icon-img/add (1).svg" alt="" class="add-subtask-img"
                                            id='plus-add-subtask' on>
                                    </div>
                                </div>
                                <div class="flt-add-tsk-output-subtask" id="flt-add-tsk-output-subtask">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="floating-add-task-footer">
                        <div id="cancel-add-task" onclick = "closeOverlay()">
                            <div class="cancel-add-task-teks">Cancel</div>
                            <div class="cancel-add-task-icon">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="cancel-add-task-img">
                                    <mask id="mask0_71720_5528" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4"
                                        y="4" width="24" height="24">
                                        <rect x="4" y="4" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_71720_5528)">
                                        <path
                                            d="M16 17.4L11.1 22.3C10.9167 22.4834 10.6834 22.575 10.4 22.575C10.1167 22.575 9.88338 22.4834 9.70005 22.3C9.51672 22.1167 9.42505 21.8834 9.42505 21.6C9.42505 21.3167 9.51672 21.0834 9.70005 20.9L14.6 16L9.70005 11.1C9.51672 10.9167 9.42505 10.6834 9.42505 10.4C9.42505 10.1167 9.51672 9.88338 9.70005 9.70005C9.88338 9.51672 10.1167 9.42505 10.4 9.42505C10.6834 9.42505 10.9167 9.51672 11.1 9.70005L16 14.6L20.9 9.70005C21.0834 9.51672 21.3167 9.42505 21.6 9.42505C21.8834 9.42505 22.1167 9.51672 22.3 9.70005C22.4834 9.88338 22.575 10.1167 22.575 10.4C22.575 10.6834 22.4834 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4834 21.0834 22.575 21.3167 22.575 21.6C22.575 21.8834 22.4834 22.1167 22.3 22.3C22.1167 22.4834 21.8834 22.575 21.6 22.575C21.3167 22.575 21.0834 22.4834 20.9 22.3L16 17.4Z"
                                            fill="#2A3647" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div id="create-add-task" onclick="uploadTask()">
                            <div class="cancel-add-task-teks">Create Task</div>
                            <img src="assets/icon-img/check.svg" alt="">
                        </div>
                    </div>
                </div>`;
    return template
}

function setCards(tasks, id) {
    let template;
    if (tasks[id].subtask === 'no subtask selected') {
        template = `<div class="card" id="${id}" data-status='${tasks[id].status}' onclick="showCardDetails('${id}')">
                                    <div class="card-label">${tasks[id].category}</div>
                                    <div class="task-title">${tasks[id].title}</div>
                                    <div class="task-description">
                                        ${tasks[id].description}
                                    </div>
                                    <div class="substask-progress-box"></div>
                                    <div class="card-footer">
                                        <div class="assigned-to" id="assignedToFor${id}"></div>
                                        <div class="priority-icon-box">
                                            <img src="assets/icon-img/${tasks[id].priority}.svg" alt="">
                                        </div>
                                    </div>
                 </div> `;

    } else {
        template = `<div class="card" id="${id}" data-status='${tasks[id].status}' onclick="showCardDetails('${id}')">
                                    <div class="card-label">${tasks[id].category}</div>
                                    <div class="task-title">${tasks[id].title}</div>
                                    <div class="task-description">
                                        ${tasks[id].description}
                                    </div>
                                    <div class="substask-progress-box">
                                        <div class="progress">
                                            <div class="progress-tracker" style="width: calc(100%*${tasks[id].subtask.filter(member => member.completed === true).length}/${tasks[id].subtask.length});"></div>
                                        </div>
                                        <p>${tasks[id].subtask.filter(member => member.completed === true).length}/${tasks[id].subtask.length} Subtasks</p>
                                    </div>
                                    <div class="card-footer">
                                        <div class="assigned-to" id="assignedToFor${id}"></div>
                                        <div class="priority-icon-box">
                                            <img src="assets/icon-img/${tasks[id].priority}.svg" alt="">
                                        </div>
                                    </div>
                 </div> `;

    }
    return template
}

function badgeTemplate(id, contacts, index) {
    let template;
    if (contacts[id]) {
        template = `<div class="badge badge${index}" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]},${contacts[id].badgeColor[2]}, 1);">
                ${contacts[id].firstLetter}${contacts[id].secondFirstLetter}
                </div>`
    } else {
        template = `<div class="badge badge${index}" style="background-color: rgba(255, 255, 255, 0);"></div>`
    }

    return template
}

function badgeTemplateSecondary(id, contacts) {
    let template;
    if (contacts[id]) {
        template = `<div class="badge" style="background-color: rgba(${contacts[id].badgeColor[0]},${contacts[id].badgeColor[1]},${contacts[id].badgeColor[2]}, 1);">
                ${contacts[id].firstLetter}${contacts[id].secondFirstLetter}
                </div>`
    } else {
        template = ''
    }

    return template
}


function setBadgeforCards(tasks, id, target, contacts) {
    document.getElementById(target).innerHTML = ''
    if (tasks[id].assignedTo === 'unassigned' || !tasks[id].assignedTo) {
        document.getElementById(target).innerHTML = 'unassigned'
    } else {
        for (let index = 0; index < tasks[id].assignedTo.length; index++) {
            document.getElementById(target).innerHTML += badgeTemplate(tasks[id].assignedTo[index], contacts, index)
        }
    }
    return
}

function setBadgeforCardsDetailed(tasks, id, target, contacts) {
    document.getElementById(target).innerHTML = ''
    if (tasks[id].assignedTo === 'unassigned'|| !tasks[id].assignedTo) {
        document.getElementById(target).innerHTML = 'unassigned'
    } else {
        for (let index = 0; index < tasks[id].assignedTo.length; index++) {
            document.getElementById(target).innerHTML += badgeTemplateSecondary(tasks[id].assignedTo[index], contacts)
        }
    }
    return
}