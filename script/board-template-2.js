function setCardDetails(tasks, id) {
    let template;
    template = `<div class="detailed-task">
                    <div class="task-header">
                        <div class="task-typ">${tasks[id].category}</div>
                        <div class="edit-close-icon-box" onclick="closeOverlay()">
                            <img src="assets/icon-img/Close.svg" alt="">
                        </div>
                    </div>
                    <div class="task-title-overlay">
                        <b>${tasks[id].title}</b>
                    </div>
                    <div class="task-description-overlay">
                        <p>${tasks[id].description}.</p>
                    </div>
                    <div class="due-date">
                        <div>
                            <div class="child-1">Due date:</div>
                            <div class="child-2">${tasks[id].dueDate}</div>
                        </div>
                    </div>
                    <div class="priority">
                        <div>
                            <div class="child-1">priority:</div>
                            <div class="child-2">
                                ${tasks[id].priority}
                                <img src="assets/icon-img/${tasks[id].priority}.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="assigned-to-overlay">
                        <div class="child-3">Assigned to:</div>
                        <div class="assigned-to-list" id="overlay-assignedToFor${id}"></div>
                    </div>
                    <div class="subtask-checker">
                        <div class="child-3">Subtasks</div>
                        <div class="subtask-list" id="subtaskFor${id}"></div>
                    </div>
                    <div class="task-footer">
                        <div class="task-board-functions">
                            <div class="delete-task-board"  onclick="deleteTask('${id}')">
                                 <svg class="delete-icon" width="24" height="24" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 
                                            16V3C0.716667 3 0.479167 2.90417 0.2875 2.7125C0.0958333 2.52083 0 2.28333 0 2C0 
                                            1.71667 0.0958333 1.47917 0.2875 1.2875C0.479167 1.09583 0.716667 1 1 1H5C5 0.716667 
                                            5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H10C10.2833 0 10.5208 
                                            0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1H15C15.2833 1 15.5208 1.09583 
                                            15.7125 1.2875C15.9042 1.47917 16 1.71667 16 2C16 2.28333 15.9042 2.52083 15.7125 2.7125C15.5208 
                                            2.90417 15.2833 3 15 3V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM3 
                                            3V16H13V3H3ZM5 13C5 13.2833 5.09583 13.5208 5.2875 13.7125C5.47917 13.9042 5.71667 14 6 14C6.28333 14 
                                            6.52083 13.9042 6.7125 13.7125C6.90417 13.5208 7 13.2833 7 13V6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 
                                            5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6V13ZM9 13C9 13.2833 9.09583 
                                            13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 
                                            11 13V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 
                                            5.47917 9 5.71667 9 6V13Z" 
                                            fill="#2A3647"/>
                                            </svg>
                                <b>delete</b>
                            </div>
                            <div class="separator-vector"></div>
                            <div class="edit-task-board"  onclick="edit('${id}')">
                                <svg class="edit-icon" width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 
                                            2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 
                                            0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 
                                            4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" 
                                            fill="#2A3647"/>
                                            </svg>
                                <b>edit</b>
                            </div>
                        </div>
                    </div>
                </div>`;
    return template
}

function setDetailedSubtask(tasks, taskId, index) {
    let template;
    if (tasks[taskId].subtask[index].completed) {
        template = `<input onclick="toggleCompleted('${taskId}',${index})" class = "subtask-checkBox" type="checkbox" id="${taskId}${index}" name="${tasks[taskId].subtask[index].text}" value="${tasks[taskId].subtask[index].text}" checked>
        <label for="${tasks[taskId].subtask[index].text}" class = "subtask-label"> ${tasks[taskId].subtask[index].text}</label><br>`;
    } else {
        template = `<input onclick="toggleCompleted('${taskId}', ${index})" class = "subtask-checkBox" type="checkbox" id="${taskId}${index}" name="${tasks[taskId].subtask[index].text}" value="${tasks[taskId].subtask[index].text}">
        <label for="${tasks[taskId].subtask[index].text}" class = "subtask-label"> ${tasks[taskId].subtask[index].text}</label><br>`;
    }
    return template
}

function setCardDetails(tasks, id) {
    let template;
    template = `<div class="detailed-task">
                    <div class="task-header">
                        <div class="task-typ">${tasks[id].category}</div>
                        <div class="edit-close-icon-box" onclick="closeOverlay()">
                            <img src="assets/icon-img/Close.svg" alt="">
                        </div>
                    </div>
                    <div class="task-title-overlay">
                        <b>${tasks[id].title}</b>
                    </div>
                    <div class="task-description-overlay">
                        <p>${tasks[id].description}.</p>
                    </div>
                    <div class="due-date">
                        <div>
                            <div class="child-1">Due date:</div>
                            <div class="child-2">${tasks[id].dueDate}</div>
                        </div>
                    </div>
                    <div class="priority">
                        <div>
                            <div class="child-1">priority:</div>
                            <div class="child-2">
                                ${tasks[id].priority}
                                <img src="assets/icon-img/${tasks[id].priority}.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="assigned-to-overlay">
                        <div class="child-3">Assigned to:</div>
                        <div class="assigned-to-list" id="overlay-assignedToFor${id}"></div>
                    </div>
                    <div class="subtask-checker">
                        <div class="child-3">Subtasks</div>
                        <div class="subtask-list" id="subtaskFor${id}"></div>
                    </div>
                    <div class="task-footer">
                        <div class="task-board-functions">
                            <div class="delete-task-board"  onclick="deleteTask('${id}')">
                                 <svg class="delete-icon" width="24" height="24" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 
                                            16V3C0.716667 3 0.479167 2.90417 0.2875 2.7125C0.0958333 2.52083 0 2.28333 0 2C0 
                                            1.71667 0.0958333 1.47917 0.2875 1.2875C0.479167 1.09583 0.716667 1 1 1H5C5 0.716667 
                                            5.09583 0.479167 5.2875 0.2875C5.47917 0.0958333 5.71667 0 6 0H10C10.2833 0 10.5208 
                                            0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1H15C15.2833 1 15.5208 1.09583 
                                            15.7125 1.2875C15.9042 1.47917 16 1.71667 16 2C16 2.28333 15.9042 2.52083 15.7125 2.7125C15.5208 
                                            2.90417 15.2833 3 15 3V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM3 
                                            3V16H13V3H3ZM5 13C5 13.2833 5.09583 13.5208 5.2875 13.7125C5.47917 13.9042 5.71667 14 6 14C6.28333 14 
                                            6.52083 13.9042 6.7125 13.7125C6.90417 13.5208 7 13.2833 7 13V6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 
                                            5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6V13ZM9 13C9 13.2833 9.09583 
                                            13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 
                                            11 13V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 
                                            5.47917 9 5.71667 9 6V13Z" 
                                            fill="#2A3647"/>
                                            </svg>
                                <b>delete</b>
                            </div>
                            <div class="separator-vector"></div>
                            <div class="edit-task-board"  onclick="edit('${id}')">
                                <svg class="edit-icon" width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 
                                            2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 
                                            0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 
                                            4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" 
                                            fill="#2A3647"/>
                                            </svg>
                                <b>edit</b>
                            </div>
                        </div>
                    </div>
                </div>`;
    return template
}
function templateEditSubtaskFunc() {
    let template;
    template = `    <img src="assets/icon-img/close (1).svg" alt="" class="add-subtask-img edit-close-button">
                    <img src="assets/icon-img/check (1).svg" alt="" class="add-subtask-img edit-check-button" onclick = 'editCheckSubtaskButton()'>`;

    return template
}

function templateEditSubtaskReset() {
    let template;
    template = `<img src="assets/icon-img/add (1).svg" alt="" class="add-subtask-img" id="plus-add-subtask" >`;
    return template
}

function templateEditTask(taskId) {
    let template;
    template = `    <div class="detailed-task-edit">
                    <div class="detailed-task-edit-header">
                        <div class="edit-close-icon-box" onclick="closeOverlay()">
                            <img src="assets/icon-img/Close.svg" alt="">
                        </div>
                    </div>
                    <div class="detailed-task-edit-body">
                        <div class="flt-title-edit-parent">
                            <div class="flt-title-edit-text">
                                <p>Title</p>
                            </div>
                            <div class="flt-title-edit-input-field">
                                <input type="text" name="edit-title-field" id="edit-title">
                            </div>
                        </div>
                        <div class="flt-desc-edit-parent">
                            <div class="flt-desc-edit-text">
                                <p>Description</p>
                            </div>
                            <div class="flt-desc-edit-input-field">
                                <textarea name="desc-edit" id="edit-desc"></textarea>
                            </div>
                        </div>
                        <div class="flt-due-Date-edit-parent">
                            <div class="flt-due-Date-edit-text">
                                <p>Due date</p>
                            </div>
                            <div class="flt-due-Date-edit-input-field">
                                <input type="date" name="edit-due-Date-field" id="edit-due-Date">
                            </div>
                        </div>
                        <div class="flt-priority-edit-parent">
                            <div class="flt-priority-edit-text">
                                <b>Priority</b>
                            </div>
                            <div class="flt-priority-edit-child">
                                <div class="flt-priority-edit-urgent floating-priority" data-priority="urgent">
                                    <div class="flt-priority-edit-urgent-text">Urgent</div>
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
                                <div class="flt-priority-edit-medium floating-priority" data-priority="medium">
                                    <div class="flt-priority-edit-medium-text">Medium</div>
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
                                <div class="flt-priority-edit-low floating-priority" data-priority="low">
                                    <div class="flt-priority-edit-medium-text">Low</div>
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
                        <div class="flt-assignTo-edit-parent">
                            <div class="flt-assignTo-edit-text">
                                <p>Assigned to</p>
                            </div>
                            <div class="flt-assignTo-edit-child-1">
                                <input type="text" name="flt-edit-assignTo" id="flt-edit-assignTo"
                                    placeholder="Select Contact to assign To">
                                <div class="arrow-icon-box" id="arrow-icon-box">
                                    <img src="assets/icon-img/arrow_drop_down.svg" alt="">
                                </div>
                            </div>
                            <div class="assign-panel" id='assignPanel'> </div>
                            <div class="flt-edit-task-assign-output-box" id="flt-edit-task-assign-output-box"></div>
                        </div>
                        <div class="flt-subtask-edit-parent">
                            <div class="flt-assignTo-edit-text">
                                <p>Subtask</p>
                            </div>
                            <div class="flt-subtask-edit-child-1">
                                <input type="text" name="flt-edit-subtasks" id="flt-edit-subtasks"
                                    placeholder="Add new Subtask">
                                <div class="subtask-icon-box" id="edit-subtask-icon-box">
                                    <img src="assets/icon-img/add (1).svg" alt="" class="add-subtask-img"
                                        id='plus-add-subtask'>
                                </div>
                            </div>
                            <div class="flt-add-tsk-output-subtask" id="flt-add-tsk-output-subtask"></div>
                        </div>
                    </div>
                    <div class="detailed-task-edit-footer">
                        <div class="ok-button" onclick="UploadChanges('${taskId}')">
                            <div class="ok-button-text">Ok</div>
                            <img src="assets/icon-img/check.svg" alt="">
                        </div>
                    </div>
                </div>`;
    return template
}