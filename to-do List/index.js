let priority =
{
    tasks: [],
    I: 0,
    V:0,
    add: function (value) {
        if (value.type == "Subdescription") {
            this.tasks.forEach((element) => {
                if (element.id == value.buttonid) {
                    element.subdescription[this.V] = value.Subdescription
                }
                this.V++
            })
            console.log(this.tasks)
            this.render()
        }
        else if(value.description){
            let description = value.description.trim();
            if (description !== "") {
                let task = {
                    id: Date.now(),
                    description: value.description,
                    subdescription: []
                };
                this.tasks.push(task);
                this.render(task);
                console.log(this.tasks)
                return;
            }

        }
        else{
        alert("Please Enter Task")
        }

    },
    render: function (value = null) {
        let showList = document.getElementById("show");

        if (value) {

            let li = document.createElement("li")
            let removeButton = document.createElement("button")
            let createSubTaskButton = document.createElement("button")
            let sort = document.createElement("button")
            removeButton.setAttribute("id", value.id)
            createSubTaskButton.setAttribute("id", value.id)
            sort.setAttribute("id", value.id)
            li.classList.add("listyle")
            li.innerText = value.description;
            removeButton.innerText = "DELETE";
            createSubTaskButton.innerText = "ADD SUB TASK"
            sort.innerText = "SORT"
            removeButton.onclick = () => this.delete(removeButton.id)
            createSubTaskButton.onclick = () => this.SubTask(createSubTaskButton.id)
            sort.onclick = () => this.sort(sort.id)
            li.appendChild(removeButton);
            li.appendChild(createSubTaskButton);
            li.appendChild(sort)
            showList.append(li);
            return;
        }
        var self = this;
        showList.innerHTML = '';
        this.tasks.forEach(function (task) {
            self.render(task);
        })

    },
    remove: function (li) {
        li.addEventListener(
            "click",
            function () {
                this.classList.toggle("done")
            }
        )
    },
    delete: function (id) {
        let index = this.tasks.findIndex((task) => task.id === Number(id));

        if (index >= 0) {
            this.tasks.splice(index, 1);
            this.render();

            return;
        }

        alert('Task not found');
    },
    SubTask: function (id) {
        let showList = document.getElementById("show")
        let subTextArea = document.createElement("textarea")

        subTextArea.classList.add("textclass")
        let addSubTask = document.createElement("button")

        switch (this.I) {
            case 0:
                subTextArea.setAttribute("id", "a1")
                addSubTask.onclick = () => { priority.add({ Subdescription: a1.value, type: "Subdescription", buttonid: id }) }
                break;
            case 1:
                subTextArea.setAttribute("id", "a2")
                addSubTask.onclick = () => { priority.add({ Subdescription: a2.value, type: "Subdescription", buttonid: id }) }
                break;

            case 2:
                subTextArea.setAttribute("id", "a3")
                addSubTask.onclick = () => { priority.add({ Subdescription: a3.value, type: "Subdescription", buttonid: id }) }
                break;

            case 3:
                subTextArea.setAttribute("id", "a4")
                addSubTask.onclick = () => { priority.add({ Subdescription: a4.value, type: "Subdescription", buttonid: id }) }
                break;

            case 4:
                subTextArea.setAttribute("id", "a5")
                addSubTask.onclick = () => { priority.add({ Subdescription: a5.value, type: "Subdescription", buttonid: id }) }
                break;

            case 5:
                subTextArea.setAttribute("id", "a6")
                addSubTask.onclick = () => { priority.add({ Subdescription: a6.value, type: "Subdescription", buttonid: id }) }
                break;

            case 6:
                subTextArea.setAttribute("id", "a7")
                addSubTask.onclick = () => { priority.add({ Subdescription: a7.value, type: "Subdescription", buttonid: id }) }
                break;

            default:
                break;
        }

        addSubTask.innerText = "Add Subtask";
        showList.appendChild(subTextArea);
        showList.appendChild(addSubTask);
        this.I++;

    }
    ,
    sort: function (sortID) {
        let index = this.tasks.findIndex((task) => task.id === Number(sortID));
        if (index > 0) {
            let a = this.tasks[index]
            this.tasks[index] = this.tasks[index - 1]
            this.tasks[index - 1] = a;
            this.render();
            // console.log(this.tasks);
            return;
        }
        if (index == 0) {
            let a = this.tasks[index]
            this.tasks[index] = this.tasks[this.tasks.length - 1]
            this.tasks[this.tasks.length - 1] = a;
            this.render();
            return
        }

    }
    
}

