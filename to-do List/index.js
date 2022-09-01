let priority =
{

    tasks: [],
    task: {
        deleted: false
    },
    add: function (value) {
        let inputTask = document.getElementById("inputTask").value.trim()
        this.task.id = this.tasks.length + 1
        this.task.discription = value.discription;



        let object = Object.assign({}, this.task);
        this.tasks.push(object);
        console.log(this.tasks)

        // console.log(this.tasks);
        this.render(value)

    },
    render: function (value) {
        let showList = document.getElementById("show")
        let box = document.getElementById("contain")
        let li = document.createElement("li")
        let removeButton = document.createElement("button")


        li.classList.add("listyle")
        li.innerText = value.discription;
        removeButton.innerText = "DELETE";
        removeButton.classList.add("removeButton")
        removeButton.onclick = () => this.remove(li)
        li.appendChild(removeButton);
        box.appendChild(li);
        showList.append(box);
        console.log(this.task.id)
 },
    remove: function (li) {
        li.addEventListener(
            "click",
            function () {
                this.classList.toggle("done")
            }
        )


    }
}

